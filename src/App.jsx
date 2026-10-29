// Components
import AiChat from "./components/features/ai_chat/AiChat/AiChat.jsx";
import ChatWidget from "./components/features/ai_chat/ChatWidget/ChatWidget.jsx";
// Contexts
import QueryProvider from "./contexts/QueryProvider.jsx"
import { WindowWidthProvider } from "./contexts/WindowWidthContext.jsx";
import {
  AiChatVisibilityProvider
} from "./components/features/ai_chat/contexts/AiChatVisibilityContext.jsx";



const App = () => {
  return (
    <QueryProvider>
      <WindowWidthProvider>
        <AiChatVisibilityProvider>

          <AiChat.Root>
            <AiChat.Header />
            <AiChat.Content />
            <AiChat.Input />
          </AiChat.Root>

          <ChatWidget.Root>
            <ChatWidget.Button />
            <ChatWidget.Label />
          </ChatWidget.Root>

        </AiChatVisibilityProvider>
      </WindowWidthProvider>
    </QueryProvider>
  )
};

export default App
