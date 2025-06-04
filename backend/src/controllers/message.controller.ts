import { Request, Response } from "express";
import prisma from "../config/database";
import { getOpenAIResponse } from "../services/openai.service";
import { Message as MessageDTO } from "../models/message.model";

export const getMessages = async (_req: Request, res: Response) => {
  const messages: MessageDTO[] = await prisma.message.findMany({
    orderBy: { createdAt: "asc" },
  });

  res.json(messages);
};

export const postMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  const userMessage: MessageDTO = await prisma.message.create({
    data: { content, sender: "user" },
  });

  const aiResponse = await getOpenAIResponse(content);

  const botMessage: MessageDTO = await prisma.message.create({
    data: { content: aiResponse, sender: "bot" },
  });

  res.json({ userMessage, botMessage });
};
