"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js");
        // eslint-disable-next-line no-console
        console.log("Service Worker registered:", reg.scope);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("Service Worker registration failed:", err);
      }
    };

    // Register after page load to avoid blocking
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register);

    return () => {
      window.removeEventListener("load", register);
    };
  }, []);

  return null;
}
