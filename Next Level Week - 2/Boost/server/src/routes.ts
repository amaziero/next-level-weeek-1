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

  const insertedUsersIds = await db("users").insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id = insertedUsersIds[0];

  const insertedClassesId = await db("classes").insert({
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

  await db("class_schedule").insert(classSchedule);

  return response.send();
});

export default routes;
