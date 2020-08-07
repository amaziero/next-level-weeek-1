import express from "express";
import ClassesController from "./controllers/ClassesControllers";
import ConnectionController from "./controllers/ConnectionsControlles";

const routes = express.Router();
routes.use(express.json());

const classesControler = new ClassesController();
const connectionControler = new ConnectionController();

routes.post("/classes", classesControler.create);
routes.get("/classes", classesControler.index);

routes.post("/connections", connectionControler.create);
routes.get("/connections", connectionControler.index);

export default routes;
