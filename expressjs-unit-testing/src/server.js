import express from "express";
import indexRouter from "./app/routers/index.router.js";
import internalRouter from "./app/routers/internal.router.js";

const app = express();

app.use('/', indexRouter);
app.use('/internal', internalRouter);

app.listen(3000);
