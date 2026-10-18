import MessageItem from "./MessageItem";

function MessageList({ messages, currentUserId }) {
  if (messages.length === 0) {
    return <p className="text-gray-400 text-center">No messages yet.</p>;
  }

  return (
    <section className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          currentUserId={currentUserId}
        />
      ))}
    </section>
  );
}

export default MessageList;
