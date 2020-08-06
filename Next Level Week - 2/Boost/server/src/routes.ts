import express from "express";
import db from "./database/connection";
import convertHoursToMinutes from "./utils/convertHoursToMinutes";

const routes = express.Router();
routes.use(express.json());

interface ScheduleItemProps {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

  const classTransaction = await db.transaction();

  try {
    const insertedUsersIds = await classTransaction("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesId = await classTransaction("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesId[0];

    const classSchedule = schedule.map((schduleItem: ScheduleItemProps) => {
      return {
        class_id,
        week_day: schduleItem.week_day,
        from: convertHoursToMinutes(schduleItem.from),
        to: convertHoursToMinutes(schduleItem.to),
      };
    });

    await classTransaction("class_schedule").insert(classSchedule);

    await classTransaction.commit();

    return response.status(201).send();
  } catch (err) {
    await classTransaction.rollback();

    return response.status(400).json({
      error: "Unexpected error while creating new class",
    });
  }
});

export default routes;
