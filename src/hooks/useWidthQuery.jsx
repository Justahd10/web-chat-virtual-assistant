// Hooks
import { useState, useEffect } from "react";



export default function useWidthQuery(widthValue) {
  // Create media role
  const mediaQuery = window.matchMedia(`(max-width: ${widthValue}px)`);

  // Media matches state
  const [widthMatches, setWidthMatches] = useState(mediaQuery.matches);

  // Media change listener
  function handleWidthMatch() {
    setWidthMatches(mediaQuery.matches);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthMatch);

    return () => {
      window.removeEventListener("resize", handleWidthMatch);
    }
  })

  return { widthMatches }
}