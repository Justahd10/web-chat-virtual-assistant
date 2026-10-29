// Hooks
import { createContext, useState, useEffect } from "react";



export const WindowWidthContext = createContext();

// Media querys
const mobile = window.matchMedia('(max-width: 620px)');


export const WindowWidthProvider = ({ children }) => {
  // Mobile width state
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  // Window rezie listener
  useEffect(() => {
    function verifyMediaQuery() {
      setIsMobileWidth(mobile.matches)
    }
    
    window.addEventListener(
      "resize", verifyMediaQuery
    );

    return () => {
      window.removeEventListener(
        "resize", verifyMediaQuery
      );
    }
  }, [])

  return (
    <WindowWidthContext.Provider value={{
      isMobileWidth
    }}>
      {children}
    </WindowWidthContext.Provider>
  )
}