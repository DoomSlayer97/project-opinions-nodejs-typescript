import { Router } from "express";
import userRouter from "./users.router";
import comentariesRouter from "./comentary.router"
import projectRouter from "./project.router"

const routes = Router();

routes.use("/users", userRouter);
routes.use("/comentaries", comentariesRouter);
routes.use("/projects", projectRouter);


export default routes;
