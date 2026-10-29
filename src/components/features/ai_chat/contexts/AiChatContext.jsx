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
  return new Date().toLocaleDateString("pt-BR", {
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
  let msgs = sessionStorage.getItem("aiChat");

  if (!msgs) {
    // Create chat session
    msgs = [];
    sessionStorage.setItem("aiChatMsg", {
      'convId': createConvId(),
      'msgs': []
    });
  }

  return msgs
};

/**
 * Append user message to messages list on submit
 */
function appendUsrMsg(msgData, setMsgs) {

  // update chat session data
  const sessionData = sessionStorage("aiChat");

  // Append message sent time
  msgData.time = createMsgTime();

  sessionStorage.setItem("aiChat", {
    ...sessionData.conversationId,
    ...{
      'msgs': [
        ...sessionData.msgs,
        ...msgData
      ]
    }
  });

  // update chat messages state
  setMsgs([...chatMsgs, msgData]);
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


export const AiChatProvider = ({ children }) => {
  // Messages state
  const [chatMsgs, setChatMsgs] = useState(null);

  const appendUsrMessage = (msgData) => appendUsrMsg(
    msgData, setChatMsgs
  )

  // mutation function
  const convId = sessionStorage.getItem("aiChat").convId;

  const mutation = useHttpClient(
    sendUsrMsgToAgent, {
    'method': "POST",
    'values': [convId, chatMsgs.at(-1).content]
  }
  );

  // get current messages on window reload
  useEffect(getChatSessionMsgs, []);

  // request AI response on user message sent
  useEffect(() => mutation.mutate(), [chatMsgs]);

  // append to messages list on ai response
  useEffect(() => appendAiMsg(
    mutation.data, setChatMsgs
  ), [mutation.data]);

  return (
    <AiChatContext.Provider value={{
      chatMsgs,
      appendUsrMessage,
      AiRequest: {
        'isPending': mutation.isPending,
        'isError': mutation.isError
      }
    }}>
      {children}
    </AiChatContext.Provider>
  )
}