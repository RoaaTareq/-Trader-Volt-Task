// /src/services/webSocketService.js

export const createWebSocketConnection = (onMessage) => {
    const wsUrl = "ws://57.128.175.72:8080/ws?apikey=Aa123!@%23"; // URL without fragment identifier
    const ws = new WebSocket(wsUrl);
  
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };
  
    ws.onmessage = (event) => {
      // Log the raw message to inspect it
      console.log("Raw WebSocket message:", event.data);
  
      try {
        // Try to parse the JSON message
        const data = JSON.parse(event.data);
  
        // Handle the parsed message
        onMessage(data);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
        console.error("Message:", event.data);
      }
    };
  
    ws.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };
  
    return ws;
  };
  