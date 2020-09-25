import { Router } from "express";
const routes = Router();

import {
  test1, test2
} from "../controllers/testing.controller"

routes.get("/test1", test1);
routes.post("/test2", test2);


export default routes;

