import React, { useState } from "react";
import ConversationList from "./features/chat/components/ConversationList";
import ChatWindow from "./features/chat/components/ChatWindow";

const App = () => {
  const conversations = [
    {
      id: 1,
      participants: [
        {
          id: "user-1",
          display_name: "Ram",
          email: "ram@gmail.com",
        },
        {
          id: "user-2",
          display_name: "Hari",
          email: "hari@gmail.com",
        },
      ],
    },
    {
      id: 2,
      participants: [
        {
          id: "user-1",
          display_name: "Ram",
          email: "ram@gmail.com",
        },
        {
          id: "user-3",
          display_name: "Sita",
          email: "sita@gmail.com",
        },
      ],
    },
  ];

  

  const currentUserId = "user-1";

  const [selectedConversation, setSelectedConversation] = useState(null);

  function handleConversationSelection(conversation) {
    setSelectedConversation(conversation);
    console.log(conversation.id)
  }

  return (
    <div className="flex min-h-screen">
      <ConversationList
        conversations={conversations}
        currentUserId={currentUserId}
        selectedId={selectedConversation?.id}
        onSelect={handleConversationSelection}
      />

      
        <ChatWindow conversation={selectedConversation} currentUserId={currentUserId} />
      
    </div>
  );
};

export default App;
