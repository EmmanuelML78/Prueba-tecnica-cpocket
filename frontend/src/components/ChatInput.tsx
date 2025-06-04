import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Props {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function ChatInput({
  input,
  onChange,
  onSubmit,
  loading,
}: Props) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-4xl mx-auto">
      <Input
        value={input}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="Escribe tu mensaje..."
        className="flex-1"
        disabled={loading}
      />
      <Button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-600 px-6"
        disabled={loading || !input.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
