import express, { Request, Response } from "express";
import { json } from "body-parser";
import { errorHandler, NotFoundError, currentUser } from "@micro-tick/common";
import "express-async-errors";
import cookieSession from "cookie-session";

import { deleteOrderRouter } from "./routes/delete";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes";
import { newRouter } from "./routes/new";

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(showOrderRouter);
app.use(deleteOrderRouter);
app.use(newRouter);
app.use(indexOrderRouter);

app.all("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
