import type { Request, Response, NextFunction } from "express";
import prisma from "../db/db.js";

export const getAllUser = async (req: Request, res: Response) => {
  const [user] = await prisma.user.findMany();

  res.status(200).json({ status: "success", data: user });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, posts } = req.body;

  const user = await prisma.user.create({ data: { name, email, posts } });

  res.status(201).json({ status: "success", data: "user create success" });
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: id as string },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const { name, posts } = req.body;

  const updateUser = await prisma.user.update({
    where: { id: id as string },
    data: { name, posts },
  });

  res.status(200).json({ status: "success", message: "got the response" });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: id as string },
  });
  if (!user) {
    throw new Error("User not found");
  }

  await prisma.user.delete({ where: { id: id as string } });

  res.status(204).json({ status: "success", message: "Delete successfull" });
};
