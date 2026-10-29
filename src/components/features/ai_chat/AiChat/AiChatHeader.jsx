// Components
import Button from "../../../common/Button/Button.jsx";
// Contexts
import { AiChatVisibilityContext } from "../contexts/AiChatVisibilityContext.jsx";
// Hooks
import { useContext } from "react";
// Styles
import "./AiChat.css";



const AiChatHeader = () => {
  // Chat visibility context
  const { dispatch } = useContext(AiChatVisibilityContext);

  return (
    <div className="ai-chat-header">
      <Button.Root onClick={()=> dispatch("extended")}>
        <Button.Icon iconName="expandContent"/>
      </Button.Root>

      <Button.Root onClick={()=> dispatch("visible")}>
        <Button.Icon iconName="close"/>
      </Button.Root>
    </div>
  )
};

export default AiChatHeader;