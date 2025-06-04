import { Message } from "@/models/message";
import api from "@/utils/axios";

export const getMessages = async (): Promise<Message[]> => {
  const res = await api.get<Message[]>("/messages");
  return res.data;
};

export const sendMessage = async (content: string) => {
  const res = await api.post("/messages", { content });
  return res.data;
};
