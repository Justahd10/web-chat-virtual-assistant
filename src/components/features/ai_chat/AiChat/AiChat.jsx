// Components
import AiChatHeader from "./AiChatHeader.jsx";
import AiChatContent from "./AiChatContent.jsx";
import AiChatInput from "./AiChatInput.jsx";
// Contexts
import { AiChatProvider } from "../contexts/AiChatContext.jsx";
import { AiChatVisibilityContext } from "../contexts/AiChatVisibilityContext.jsx";
// Hooks
import { useContext } from "react";
import useWidthQuery from "../../../../hooks/useWidthQuery.jsx";
// Styles
import "./AiChat.css";



function resolveStyles(extended, widthMatches) {
  if (extended && !widthMatches) {
    return "ai-chat-box ai-chat-box--extended"
  };

  return "ai-chat-box";
}

/**
 * @param {import('../../../../type.js').AiChatInterface} chatOptions
 */
const AiChatRoot = ({ children }) => {
  // Visibility context
  const {
    chatVisibility: { isExtended }
  } = useContext(AiChatVisibilityContext);

  // get window width state
  const { widthMatches } = useWidthQuery("625");

  // Handle styles
  const styles = resolveStyles(isExtended, widthMatches);
  
  return (
    <div className={styles}>
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