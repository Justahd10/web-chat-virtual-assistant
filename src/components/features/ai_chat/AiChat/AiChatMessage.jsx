// Styles
import "./AiChat.css";



/**
 * @param {string} msgType
 */
function resolveMsgStyles(msgType) {
  if (msgType === "usr") {
    return "usr-msg"
  }

  return "ai-msg"
}

/**
 * @param {import("../../../../type.js").AiChatMsgInterface} msgOptions
 */
const AiChatMessage = ({
  type,
  content,
  msgTime
}) => {
  // styles handling
  const containerStyle = resolveMsgStyles(type);

  return (
    <div className={containerStyle}>
      <span className="ai-chat-msg-text">
        {content}
      </span>
      <span className="ai-chat-msg-time">
        {msgTime}
      </span>
    </div>
  )
};

export default AiChatMessage;