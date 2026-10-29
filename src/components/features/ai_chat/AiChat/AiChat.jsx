// Components
import AiChatHeader from "./AiChatHeader.jsx";
import AiChatContent from "./AiChatContent.jsx";
import AiChatInput from "./AiChatInput.jsx";
// Contexts
import { AiChatProvider } from "../contexts/AiChatContext.jsx";
// Styles
import "./AiChat.css";



/**
 * @param {import('../../../../type.js').AiChatInterface} chatOptions
 */
const AiChatRoot = ({ children }) => {
  return (
    <div className="ai-chat-container">
      <AiChatProvider>
        {children}
      </AiChatProvider>
    </div>
  )
};


const AiChat = {
  'Root': AiChatRoot,
  'Header': AiChatHeader,
  'Content': AiChatContent,
  'Input': AiChatInput
};

export default AiChat