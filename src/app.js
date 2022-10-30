import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user/user.router";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Mongo connected successfully"))
  .catch((e) => {
    console.log(e);
    console.log("Mongo connection failed!");
    console.log("Shutting down server!");
    process.exit(1);
  });

app.use((req, res, next) => {
  console.log(
    `Logged: ${new Date().toLocaleDateString()}:${new Date().toLocaleTimeString()}`
  );
  next();
});

const logger = (req, res, next) => {
  return (req, res, next) => {
    console.log("This is a middleware");
    next();
  };
};

app.use("/user", logger(), userRouter);

app.use((req, res) => {
  res.status(404).json({
    result: "Not found",
  });
});

export default app;
