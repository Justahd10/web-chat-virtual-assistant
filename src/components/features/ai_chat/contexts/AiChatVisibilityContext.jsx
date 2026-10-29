// Hooks
import { createContext, useReducer } from "react";



export const AiChatVisibilityContext = createContext();


export function chatVisibilityReducer(state, action) {
  switch (action) {

    case "visible": 
      state.visible = !state.visible;
      break;
      
    case "extended":
      state.extended = !state.extended;
  }

  return state
}

export const AiChatVisibilityProvider = ({ children }) => {
  // Ai chat visibility state handling
  const [chatVisibility, dispatch] = useReducer(
    chatVisibilityReducer, {
      "visible": false,
      "extended": false
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