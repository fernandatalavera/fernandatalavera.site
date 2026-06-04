"use client";

import { useEffect, useRef } from "react";

const MIN_INDICATOR_HEIGHT = 32;

export function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const updateIndicator = () => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const scrollElement = document.documentElement;
    const { scrollTop, scrollHeight, clientHeight } = scrollElement;

    if (scrollHeight <= clientHeight + 1) {
      indicator.style.opacity = "0";
      return;
    }

    const height = Math.max(
      (clientHeight / scrollHeight) * clientHeight,
      MIN_INDICATOR_HEIGHT,
    );
    const maxTop = clientHeight - height;
    const top =
      maxTop > 0 ? (scrollTop / (scrollHeight - clientHeight)) * maxTop : 0;

    indicator.style.height = `${height}px`;
    indicator.style.transform = `translateY(${Math.round(top)}px)`;
    indicator.style.opacity = "1";
  };

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateIndicator();
      });
    };

    updateIndicator();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={indicatorRef} className="scroll-indicator" aria-hidden="true" />
  );
}
