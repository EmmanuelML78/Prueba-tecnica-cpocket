"use client";

import { useEffect, useRef, useState } from "react";
import { getMessages, sendMessage as sendMessageToAPI } from "@/api/chat";
import type { Message } from "@/models/message";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare } from "lucide-react";
import MessageBubble from "./MessageBubble";
import { getGreeting } from "@/utils/greeting";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const history = await getMessages();
      setMessages(history);
    };
    loadMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;
    setInput("");
    setIsLoading(true);

    const userMsg: Message = {
      id: Date.now(),
      content: message,
      sender: "user",
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const { botMessage } = await sendMessageToAPI(message);
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-emerald-500 p-4 text-white shadow-md">
        <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
          <MessageSquare className="h-6 w-6" />
          <h1 className="text-xl font-medium">Chat With Pocki</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full text-white text-sm flex items-center justify-center font-medium">
                P
              </div>
              <div className="bg-gray-200 p-4 rounded-lg max-w-xs sm:max-w-md">
                <p className="text-gray-800">
                  {getGreeting()}, soy Pocki. ¿Cómo puedo ayudarte hoy?
                </p>
              </div>
            </div>
          ) : (
            messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
          )}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full text-white text-sm flex items-center justify-center font-medium">
                P
              </div>
              <div className="bg-gray-200 p-4 rounded-lg max-w-xs sm:max-w-md">
                <p className="text-sm text-gray-600">
                  Pocki está escribiendo...
                </p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="border-t bg-white p-4 shadow-lg">
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-emerald-500 hover:bg-emerald-600 px-6">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </footer>
    </div>
  );
}
