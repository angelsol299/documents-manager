import { useEffect, useState } from "react";

const SOCKET_URL = "ws://localhost:8080";

export const useSocket = () => {
  const [countNotifications, setCountNotifications] = useState(0);

  const triggerResetCounter = () => setCountNotifications(0);

  useEffect(() => {
    const ws = new WebSocket(`${SOCKET_URL}/notifications`);

    ws.onopen = () => console.log("Connection Open");
    ws.onmessage = () => {
      setCountNotifications((prev) => prev + 1);
    };
    ws.onerror = (e) => {
      const errorMessage = "message" in e ? e.message : "Unknown socket error";
      console.log("Socket error", errorMessage);
    };
    ws.onclose = () => console.log("Connection closed");
    return () => ws.close();
  }, []);

  return { notifications: countNotifications, triggerResetCounter };
};
