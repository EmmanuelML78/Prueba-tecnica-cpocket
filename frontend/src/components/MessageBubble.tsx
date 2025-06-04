import { Message } from "@/models/message";

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
          isUser ? "bg-blue-500" : "bg-emerald-500"
        }`}>
        {isUser ? "U" : "P"}
      </div>
      <div
        className={`rounded-lg p-4 max-w-xs sm:max-w-md ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
