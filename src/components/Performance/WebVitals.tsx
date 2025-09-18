"use client";

import { useEffect } from "react";

// Web Vitals monitoring for performance tracking
export default function WebVitals() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Import web-vitals dynamically to reduce bundle size
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    });
  }, []);

  return null;
}
