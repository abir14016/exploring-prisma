import express, { Application } from "express";
import cors from "cors";
import { deflate } from "zlib";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

export default app;
