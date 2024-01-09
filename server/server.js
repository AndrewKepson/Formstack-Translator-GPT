import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authenticationRoutes, formStackRoutes } from "./routes/index.js";

const app = express();

app.use(cors())
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(morgan("short"))
    .use("/authenticate", authenticationRoutes)
    .use("/forms", formStackRoutes)
    .listen(3001, () => console.log(`Server listening on port 3001`));
