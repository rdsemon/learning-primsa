import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const server = app;
const port = process.env.PORT;

console.log("Hello");

server.listen(port, () => {
  console.log(`listening in on port ${port}`);
});
