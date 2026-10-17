import MessageComposer from "./MessageComposer";
import MessageList from "./MessageList";

function ChatWindow({ conversation, currentUserId, messages }) {
  
  if (!conversation) {
    return (
      <main className="flex-1 min-w-0 flex items-center justify-center p-6">
        <p className="text-gray-500">
          Select a conversation to start chatting.
        </p>
      </main>
    );
  }

  const otherUser = conversation.participants.find(
    (user) => user.id !== currentUserId
  );

  const name =
    otherUser?.display_name ||
    otherUser?.email ||
    "Unknown user";

  return (
    <main className="flex-1 min-w-0 flex flex-col">
      <header className="border-b p-4 flex gap-3 items-center">
        <div className="rounded-full h-11 w-11 shrink-0 text-xl font-semibold bg-blue-200 flex items-center justify-center">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">
            {otherUser?.email}
          </p>
        </div>
      </header>

      <section className="flex-1 p-6">
        <p className="text-gray-400">
          <MessageList messages={messages} currentUserId={currentUserId} />
        </p>
      </section>
      <MessageComposer />
    </main>
  );
}

export default ChatWindow;
