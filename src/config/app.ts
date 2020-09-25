import express from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.set("port", 3000);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

export default app;