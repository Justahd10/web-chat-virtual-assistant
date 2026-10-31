// Hooks
import { createContext, useState, useEffect } from "react";
import useHttpClient from "../../../../hooks/useHttpClient.jsx"
// HTTP Client
import sendUsrMsgToAgent from "../../../../http_client/web_chatbot.js";



export const AiChatContext = createContext(null);

/**
 * Create sent time of chat message when created
 */
function createMsgTime() {
  // Get timezone
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Create sent time
  return new Date().toLocaleTimeString("pt-BR", {
    'timeZone': tz,
    'hour': "2-digit",
    'minute': "2-digit"
  });
}

function getChatSessionData() {
  let sessionData = sessionStorage.getItem("aiChat");

  if (sessionData) return JSON.parse(sessionData);

  return sessionData
};

function updateMsgsSession(msgData) {
  // Get current session data
  let sessionData = getChatSessionData();

  // Append new message data
  sessionData = JSON.stringify({
    ...sessionData,
    'msgs': [
      ...sessionData.msgs,
      msgData
    ]
  });

  // Update chat session
  sessionStorage.setItem("aiChat", sessionData);

  return JSON.parse(sessionData);
};

/**
 * Fetch AI web chat messages from sessionStorage
 * on window reload
 */
function getChatSessionMsgs() {
  // Check if chat session exists
  const sessionData = getChatSessionData();

  if (!sessionData) {
    // Create initial data
    const chatData = JSON.stringify({
      'sessionId': crypto.randomUUID(),
      'msgs': []
    });

    // Start chat session
    sessionStorage.setItem("aiChat", chatData);

    return []
  }

  return sessionData.msgs;
};

/**
 * Append user message to messages list on submit
 */
function appendUsrMsg(msgData, msgs, setMsgs, mutation) {
  // Push message time to data
  msgData.time = createMsgTime();

  // Update session data
  const sessionData = updateMsgsSession(msgData);

  // update chat messages state
  setMsgs([...msgs, msgData]);

  // Request ai response
  mutation.mutate([
    sessionData.sessionId,
    msgData.content
  ]);
};

/**
 * Append AI response to messages list on response
 */
function handleMutationResult(mutation, msgs, setMsgs) {
  if (mutation.data) {
    // Append data to message object
    const msgTime = createMsgTime();

    // Create AI message data
    const aiMsgData = {
      'type': "ai",
      'content': mutation.data.payload.msg,
      'time': msgTime
    };

    // Update session storage
    updateMsgsSession(aiMsgData);

    // Update messages  list
    setMsgs([...msgs, aiMsgData]);
  }
}

export const AiChatProvider = ({ children }) => {
  // get current messages on window reload
  const [chatMsgs, setChatMsgs] = useState(getChatSessionMsgs);

  // Create ai request to on user message submit
  const mutation = useHttpClient(sendUsrMsgToAgent, "POST");

  // Create function to on user message submit
  const appendUsrMessage = (msgData) => appendUsrMsg(
    msgData, chatMsgs, setChatMsgs, mutation
  );

  // append to messages list on ai response
  useEffect(() => {
    handleMutationResult(mutation, chatMsgs, setChatMsgs);
  }, [mutation.data]);

  return (
    <AiChatContext.Provider value={{
      chatMsgs,
      appendUsrMessage,
      AiRequest: {
        'isPending': mutation?.isPending,
        'isError': mutation?.isError
      }
    }}>
      {children}
    </AiChatContext.Provider>
  )
}