import { useRef } from "react";

export function useEventListeners<TEventName>() {
  const listenersRef = useRef<Record<string, TListener[]>>({});

  const addEventListener = (eventName: string, listener: TListener) => {
    if (!listenersRef.current[eventName]) listenersRef.current[eventName] = [];

    listenersRef.current[eventName].push(listener);
  };

  const removeEventListener = (eventName: string, listener: TListener) => {
    const listeners = listenersRef.current[eventName];

    if (!listeners) return;

    listenersRef.current[eventName] = listenersRef.current[eventName].filter(
      (l) => l !== listener
    );
  };

  const triggerEvent = (eventName: string, args: any) => {
    const listeners = listenersRef.current[eventName];
    if (!listeners) return;

    listeners.forEach((listener) => listener(args));
  };

  return {
    addEventListener,
    removeEventListener,
    triggerEvent,
  };
}

type TListener = (args: any) => void;
