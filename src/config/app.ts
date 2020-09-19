import express from "express";
import { json, urlencoded } from "express";
import cors from "cors";
const app = express();

app.set("port", 3000);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

export default app;