// Components
import AiChatMessage from "./AiChatMessage.jsx";
import AiChatLoader from "./AiChatLoader.jsx";
import AiChatError from "./AiChatError.jsx";
// Contexts
import { AiChatContext } from "../contexts/AiChatContext.jsx";
// Hooks
import { useContext } from "react";
// Styles
import "./AiChat.css";



/**
 * @param {Array<import("../../../../type.js").AiChatMsgInterface>} msgs
 */
function renderMessages(msgs) {
  return msgs.map((msg, index) =>  (
      <AiChatMessage
        key={msg.id ?? index}
        type={msg.type}
        content={msg.content}
        msgTime={msg.time}
      />
    )
  )
};

const AiChatContent = () => {
  // Ai chat messages state
  const {
    chatMsgs,
    AiRequest: {
      isPending,
      isError
    }
  } = useContext(AiChatContext);

  // Messages rendering
  const msgs = renderMessages(chatMsgs);

  return (
    <div className="ai-chat-msgs">
      {msgs}
      {isPending && <AiChatLoader />}
      {isError && <AiChatError />}
    </div>
  )
};

export default AiChatContent