"use client";

import { useEffect } from "react";

export default function ParallaxInit() {
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty(
            "--scroll-y",
            `${window.scrollY}px`
          );
          ticking = false;
        });
        ticking = true;
      }
    };
    // Set initial value
    document.documentElement.style.setProperty("--scroll-y", "0px");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
