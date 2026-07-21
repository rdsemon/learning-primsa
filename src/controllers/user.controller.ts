import type { Request, Response, NextFunction } from "express";

const getAllUser = async (req: Request, res: Response) => {};

const createUser = async (req: Request, res: Response) => {
  const { name, email, post } = req.body;

  res.status(200).json({ status: "success", data: "" });
};
