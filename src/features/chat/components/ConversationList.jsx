import ConversationItem from "./ConversationItem";

function ConversationList({ conversations, currentUserId, selectedId, onSelect }) {
  return (
    <aside className="p-4">
      <h2 className="text-xl font-bold mb-4">Conversations</h2>

      {conversations.map((conversation) => {
        const otherUser = conversation.participants.find(
          (user) => user.id != { currentUserId },
        );

        return (
          <ConversationItem
            key={conversation.id}
            name={otherUser?.display_name || "Unknown user"}
            email={otherUser?.email || ""}
            selected={selectedId === conversation.id}
            onClick={() => onSelect(conversation)}
          />
        );
      })}
    </aside>
  );
}

export default ConversationList;
