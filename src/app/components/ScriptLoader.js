"use client";
import Script from "next/script";

export default function ScriptLoader() {
  return (
    <Script
      src="https://tapi.bale.ai/miniapp.js?1"
      strategy="beforeInteractive"
      onLoad={() => console.log("Bale Mini App script loaded!")}
    />
  );
}
