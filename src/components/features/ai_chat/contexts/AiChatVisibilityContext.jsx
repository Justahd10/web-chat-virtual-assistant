// Hooks
import { createContext, useReducer } from "react";



export const AiChatVisibilityContext = createContext();


export function chatVisibilityReducer(state, action) {
  switch (action) {

    case "visible": 
      state.isVisible = !state.isVisible;
      break;
      
    case "extended":
      state.isExtended = !state.isExtended;
  }

  return state
}

export const AiChatVisibilityProvider = ({ children }) => {
  // Ai chat visibility state handling
  const [chatVisibility, dispatch] = useReducer(
    chatVisibilityReducer, {
      "isVisible": false,
      "isExtended": false
    }
  );

  return (
    <AiChatVisibilityContext.Provider value={{
      chatVisibility, dispatch
    }}>
      {children}
    </AiChatVisibilityContext.Provider>
  )
}