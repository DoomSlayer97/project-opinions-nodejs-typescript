import { Router } from "express";
const routes = Router();

import {
  create,
  findAll,
  findOne,
  deleteOne,
  auth
} from "../controllers/user.controller";

routes.post("/auth", auth);

routes.post("/", create);
routes.get("/", findAll);
routes.get("/:id", findOne);
routes.delete("/:id", deleteOne);

export default routes;
