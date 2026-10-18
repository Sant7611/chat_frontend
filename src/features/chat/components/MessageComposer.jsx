import { useState } from "react";
import { IoIosSend } from "react-icons/io";

function MessageComposer({onSend}) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const content = message.trim();

    if (!content) return;
    onSend(content)

    console.log(content);
    setMessage("");
  }

  function handleInput(event) {
    setMessage(event.target.value);
  }

  return (
    <form className="flex gap-2 " onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleInput}
        className="border rounded-xl px-3 py-2 flex-1 min-w-0"
        placeholder="Type to start conversation"
        maxLength={1000}
      />

      <button
        className="bg-blue-200  rounded-xl  cursor-pointer px-3 py-2 flex gap-1 items-center justify-center"
        disabled={!message.trim()}
      >
        Send <IoIosSend className="" />
      </button>
    </form>
  );
}

export default MessageComposer;
