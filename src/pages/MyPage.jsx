// Components
import AiChat from "../components/features/ai_chat/AiChat/AiChat";
import ChatWidget from "../components/features/ai_chat/ChatWidget/ChatWidget";
// Contexts
import {
  AiChatVisibilityContext
} from "../components/features/ai_chat/contexts/AiChatVisibilityContext";
// Hooks
import { useContext } from "react";
// Styles
import "./MyPage.css";



const MyPage = () => {
  // Chat visibility context
  const {
    chatVisibility: { isVisible }
  } = useContext(AiChatVisibilityContext);

  return (
    <main className="page">
      {
        isVisible && (
          <AiChat.Root>
            <AiChat.Header />
            <AiChat.Content />
            <AiChat.Input />
          </AiChat.Root>
        )
      }
      
      <ChatWidget.Root>
        <ChatWidget.Button />
        <ChatWidget.Label 
        label="Ajudo com nossa loja?"/>
      </ChatWidget.Root>
    </main>
  )
}

export default MyPage