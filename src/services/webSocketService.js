export const connectWebSocket = (url, onMessage) => {
    const fixedUrl = url.split('#')[0]; // Remove any fragment identifier if present
  
    const ws = new WebSocket(fixedUrl);
  
    ws.onopen = () => {
      console.log('WebSocket connected');
    };
  
    ws.onmessage = (event) => {
      try {
        const data = event.data && event.data.trim();
  
        // If the message is a valid JSON string and starts with '{', attempt to parse it
        if (data && data[0] === '{') {
          const parsedData = JSON.parse(data);
  
          // Check if the message contains a 'value' property (the expected structure)
          if (parsedData && Array.isArray(parsedData.value)) {
            // Process the updates if the format is correct
            parsedData.value.forEach((update) => {
              onMessage(update);
            });
          } else {
            // Log a warning if the message doesn't have the expected 'value' property
            console.error('Received non-JSON message or missing "value" array:', data);
          }
        } else if (/^[0-9a-fA-F-]{36}$/.test(data)) {
          // If it's a UUID (matches the pattern of 36-character alphanumeric + dashes), log it as non-JSON
          console.log('Received UUID:', data);
        } else {
          // Log any other non-JSON message
          console.error('Received non-JSON message:', data);
        }
      } catch (error) {
        // Catch any error related to JSON parsing
        console.error("Error processing WebSocket message:", error);
  
        // Log the raw message received for debugging purposes
        console.log("Received data:", event.data);
      }
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
  
    return ws;
  };
  