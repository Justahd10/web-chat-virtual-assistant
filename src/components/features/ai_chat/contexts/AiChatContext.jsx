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
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Date().toLocaleTimeString("pt-BR", {
    'timeZone': tz,
    'hour': "2-digit",
    'minute': "2-digit"
  });
}

/*
* Generate custom id for AI conversation session
*/
function createConvId() {
  return 1234
}

/**
 * Fetch AI web chat messages from sessionStorage
 * on window reload
 */
function getChatSessionMsgs() {
  // Check if chat session exists
  let sessionData = sessionStorage.getItem("aiChat");

  if (!sessionData) {
    // Create chat session
    const chatData = {
      'convId': createConvId(),
      'msgs': []
    };

    sessionStorage.setItem("aiChat", JSON.stringify(chatData));

    return []
  }

  return JSON.parse(sessionData).msgs;
};

/**
 * Append user message to messages list on submit
 */
function appendUsrMsg(msgData, setMsgs) {

  // Get session data
  let sessionData = sessionStorage.getItem("aiChat");
  sessionData = JSON.parse(sessionData);

  // Update session data
  msgData.time = createMsgTime();
  sessionData = {
    ...sessionData,
    'msgs': [
      ...sessionData.msgs,
      msgData
    ]
  }

  sessionStorage.setItem("aiChat", JSON.stringify(sessionData));

  // update chat messages state
  setMsgs(sessionData.msgs);
};

/**
 * Append AI response to messages list on response
 */
function appendAiMsg(msgData, setMsgs) {
  if (msgData) {
    const msgTime = createMsgTime();

    setMsgs([...chatMsgs, {
      'type': "ai",
      'content': data.text,
      'time': msgTime
    }])
  }
}


function createMutation(chatMsgs) {
  let sessionData = sessionStorage.getItem("aiChat");
  sessionData = JSON.parse(sessionData);

  return useHttpClient(
    sendUsrMsgToAgent, {
    'method': "POST",
    'values': [sessionData.convId, chatMsgs.at(-1).content]
  }
  );
}

export const AiChatProvider = ({ children }) => {
  // get current messages on window reload
  const [chatMsgs, setChatMsgs] = useState(getChatSessionMsgs);

  const appendUsrMessage = (msgData) => appendUsrMsg(
    msgData, setChatMsgs
  );

  // mutation function placeholder
  let mutation;

  // request AI response on user message sent
  useEffect(() => {
    if (mutation) mutation.mutate()
  }, [chatMsgs]);

  // append to messages list on ai response
  useEffect(() => {
    if (mutation?.data) {
      mutation = createMutation(chatMsgs);
      appendAiMsg(mutation.data, setChatMsgs);
    }
  }, [mutation]);

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