import express from "express";
import ClassesController from "./controllers/ClassesControllers";
import ConnectionController from "./controllers/ConnectionsControlles";

const routes = express.Router();
routes.use(express.json());

const classesControler = new ClassesController();
const connectionControler = new ConnectionController();

routes.post("/classes", classesControler.create);
routes.get("/classes", classesControler.index);
routes.get("/connections", connectionControler.create);

export default routes;
