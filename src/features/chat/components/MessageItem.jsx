function MessageItem({ message, currentUserId }) {
  const isMine = message.sender.id === currentUserId;

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div className={`rounded-xl px-4 py-2 max-w-xs ${
        isMine ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}>
        <p>{message.content}</p>
      </div>
    </div>
  );
}

export default MessageItem;