const webhookUrl = import.meta.env.VITE_N8N_ENDPOINT;



/**
 * @param {string} msg
 */
export default async function sendUsrMsgToAgent(convId, usrMsg) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  // Try request Ai response
  try {
    const response = await fetch(webhookUrl, {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'sessionId': convId,
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