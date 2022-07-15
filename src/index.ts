import express from "express";
import cors from "cors";
import chalk from "chalk";
import "dotenv/config";
import "express-async-errors";

import router from "./routers/router.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(chalk.bold.blue(`Server running on port ${process.env.PORT}`)));