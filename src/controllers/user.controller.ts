import type { Request, Response, NextFunction } from "express";
import prisma from "../db/db.js";

export const getAllUser = async (req: Request, res: Response) => {
  const [user] = await prisma.user.findMany();

  res.status(200).json({ status: "success", data: user });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, posts } = req.body;

  const user = await prisma.user.create({ data: { name, email, posts } });

  res.status(200).json({ status: "success", data: "user create success" });
};

