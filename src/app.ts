import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

console.log("hello");
console.log("hi");

app.use("/api", userRouter);

export default app;
