import { Router } from "express";
import userRouter from "./users.router";
import comentariesRouter from "./comentary.router";
import projectRouter from "./project.router";
import testRouter from "./test.router";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/comentaries", comentariesRouter);
routes.use("/projects", projectRouter);
routes.use("/tests", testRouter);

export default routes;
