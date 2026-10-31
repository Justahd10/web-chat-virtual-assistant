const webhookUrl = import.meta.env.VITE_N8N_ENDPOINT;



/**
 * @param {string} msg
 */
export default async function sendUsrMsgToAgent(sessionId, usrMsg) {
  // Try request Ai response
  try {
    const response = await fetch(webhookUrl, {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'sessionId': sessionId,
        'usrMsg': usrMsg
      })
    });

    // response data parsing
    const data = await response.json();

    // handle HTTP errors
    if (!response.ok) throw Error("Client error");
    
    return data;

  } catch (error) {
    throw Error("Fetch failed");
  }
}