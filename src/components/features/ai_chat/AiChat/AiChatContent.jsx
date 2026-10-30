// Components
import AiChatMessage from "./AiChatMessage.jsx";
import Loader from "../../../common/Loader/Loader.jsx";
import AiChatError from "./AiChatError.jsx";
// Contexts
import { AiChatContext } from "../contexts/AiChatContext.jsx";
// Hooks
import { useEffect, useContext, useRef } from "react";
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

function handleChatScroll(chatRef) {
  chatRef.current.scrollTop =
    chatRef.current.scrollHeight
}

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

  // Create chat reference
  const chatRef = useRef(null);

  // Messages update listener
  useEffect(() => {
    if (chatRef.current) handleChatScroll(chatRef)
  }, [chatMsgs])

  return (
    <div className="ai-chat-content" ref={chatRef}>
      {msgs}
      {isPending && <Loader type="dots"/>}
      {isError && <AiChatError />}
    </div>
  )
};

export default AiChatContent