import { Router } from "express";
const routes = Router();

import {
  create,
  findAll,
  findByProject
} from "../controllers/commentary.controller"

routes.post("/", create);
routes.get("/", findAll);
routes.get("/project/:projectId", findByProject);

export default routes;
