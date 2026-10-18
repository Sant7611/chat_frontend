import { useState } from "react";
import MessageComposer from "./MessageComposer";
import MessageList from "./MessageList";

function ChatWindow({ conversation, currentUserId }) {
  const [messageByConversation, setMessageByConversation] = useState({
    1: [
      {
        id: 1,
        content: "Hello Hari!",
        sender: { id: "user-1" },
      },
      {
        id: 2,
        content: "Hello Ram!",
        sender: { id: "user-2" },
      },
    ],
    2: [
      {
        id: 3,
        content: "Hello Sita!",
        sender: { id: "user-1" },
      },
    ],
  });

  function handleSubmitMessage(content) {
    if (!conversation) return;

    const conversationId = conversation.id;

    const newMessage = {
      id: crypto.randomUUID(),
      content: content,
      sender: { id: currentUserId },
    };

    setMessageByConversation((previous) => ({
      ...previous,
      [conversationId]: [...(previous[conversationId] ?? []), newMessage],
    }));
  }

  if (!conversation) {
    return (
      <main className="flex-1 min-w-0 min-h-0 flex flex-col">
        <p className="text-gray-500">
          Select a conversation to start chatting.
        </p>
      </main>
    );
  }

  const otherUser = conversation.participants.find(
    (user) => user.id !== currentUserId,
  );

  const name = otherUser?.display_name || otherUser?.email || "Unknown user";

  return (
    <main className="flex-1 min-w-0 flex flex-col">
      <header className="border-b p-4 flex gap-3 items-center">
        <div className="rounded-full h-11 w-11 shrink-0 text-xl font-semibold bg-blue-200 flex items-center justify-center">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">{otherUser?.email}</p>
        </div>
      </header>
      <section className="flex-1 p-6">
        <MessageList messages={messageByConversation[conversation.id] ?? [] } currentUserId={currentUserId} />
      </section>

      <section className="p-6">
        <MessageComposer onSend={handleSubmitMessage}  />
      </section>
    </main>
  );
}

export default ChatWindow;
