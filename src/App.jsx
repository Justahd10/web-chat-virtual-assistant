// Contexts
import QueryProvider from "./contexts/QueryProvider.jsx"
import { WindowWidthProvider } from "./contexts/WindowWidthContext.jsx";
import {
  AiChatVisibilityProvider
} from "./components/features/ai_chat/contexts/AiChatVisibilityContext.jsx";

// Pages
import MyPage from "./pages/MyPage.jsx";


const App = () => {
  return (
    <QueryProvider>
      <WindowWidthProvider>
        <AiChatVisibilityProvider>
          <MyPage />
        </AiChatVisibilityProvider>
      </WindowWidthProvider>
    </QueryProvider>
  )
};

export default App
