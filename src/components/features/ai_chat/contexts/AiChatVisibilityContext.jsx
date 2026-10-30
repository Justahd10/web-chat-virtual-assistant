// Hooks
import { createContext, useReducer } from "react";



export const AiChatVisibilityContext = createContext();


export function chatVisibilityReducer(state, action) {

  switch (action) {

    case "visible":
      return { ...state, isVisible: !state.isVisible };
      
    case "extended":
      return { ...state, isExtended: !state.isExtended };
  }
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