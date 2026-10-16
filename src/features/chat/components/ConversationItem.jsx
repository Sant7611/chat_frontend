const ConversationItem = ({
  name,
  email,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex gap-3 m-2 p-3 items-center
        rounded-lg cursor-pointer text-left
        ${selected ? "bg-blue-100" : "hover:bg-gray-100"}`}
    >
      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center font-bold">
        {name?.charAt(0).toUpperCase() || "?"}
      </div>

      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>{email}</p>
      </div>
    </button>
  );
};

export default ConversationItem;