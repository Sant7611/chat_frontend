function MessageItem({ message, currentUserId }) {
  const isMine = message.sender.id === currentUserId;

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs min-w-0 wrap-anywhere rounded-xl px-4 py-2 ${
          isMine ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

export default MessageItem;
