// Components
import AiChat from "./components/features/ai_chat/AiChat/AiChat.jsx";
import ChatWidget from "./components/features/ai_chat/ChatWidget/ChatWidget.jsx";
// Contexts
import QueryProvider from "./contexts/QueryProvider.jsx"
import { WindowWidthProvider } from "./contexts/WindowWidthContext.jsx";



const App = () => {
  return (
    <QueryProvider>
      <WindowWidthProvider>

        <AiChat.Root>
          <AiChat.Header/>
          <AiChat.Content/>
          <AiChat.Input/>
        </AiChat.Root>

        <ChatWidget.Root>
          <ChatWidget.Button/>
          <ChatWidget.Label/>
        </ChatWidget.Root>

      </WindowWidthProvider>
    </QueryProvider>
  )
};

export default App
