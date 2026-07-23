import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
