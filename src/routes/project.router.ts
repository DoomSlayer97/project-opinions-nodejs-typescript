import { Router } from "express";
const routes = Router();

import {
  create,
  findAll,
  findOne
} from "../controllers/project.controller"

routes.post("/", create);
routes.get("/", findAll);
routes.get("/:id", findOne);

export default routes;
