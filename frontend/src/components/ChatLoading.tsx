export default function ChatLoading() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
        P
      </div>
      <div className="bg-gray-200 rounded-lg p-4 max-w-xs sm:max-w-md">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
          <span className="text-gray-600 text-sm">Pocki está escribiendo...</span>
        </div>
      </div>
    </div>
  );
}
