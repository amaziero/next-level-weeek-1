import express from "express";
import ClassesController from "./controllers/ClassesControllers";

const routes = express.Router();
routes.use(express.json());

const classesControler = new ClassesController();

routes.post("/classes", classesControler.create);
routes.get("/classes", classesControler.index);

export default routes;
