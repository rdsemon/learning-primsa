import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

console.log("hello");
console.log("hi");

export default app;
