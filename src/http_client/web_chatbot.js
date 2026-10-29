/**
 * @param {string} msg
 */
export default async function sendUsrMsgToAgent(convId, usrMsg) {
  // Start request result
  const result = {
    'success': false,
    'error': null,
    'data': null 
  };

  // Try request Ai response
  try {
    const response = await fetch("", {
      'headers': {
        'Content-Type': "application/json"
      },
      'body': {
        'sessionId': convId,
        'usrMsg': usrMsg
      }
    });

    // response data parsing
    const data = response.json();

    // handle HTTP errors
    if (!response.ok) {
      result.error = data.error;
    } else {
      result.success = true;
      result.data = data.payload;
    }

  } catch (error) {
    // Handle fetch fails
    result.error = "FETCH_FAILED";
  }

  return result
}