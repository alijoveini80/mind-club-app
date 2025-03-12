"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function ProtectPage({ title, userId }) {
  // useEffect(() => {
  //   if (window.Bale && window.Bale.WebApp) {
  //     window.Bale.WebApp.onEvent("backButtonClicked", function () {
  //       console.log("Back button was clicked");
  //       // Handle back button action here
  //     });
  //   } else {
  //     console.error("Bale.WebApp is not available");
  //   }
  // }, []);
  const router = useRouter();
  const link = title === "dashboard" ? "protected" : "dashboard";
  return (
    <>
      <h1 className="--bale-bg_color">
        wellcome to {title} page, {userId}
      </h1>
      {/* <button type="button" onClick={() => router.push(`/${link}`)}>
        {link}
      </button> */}
      <Link href={`/${link}`}>{link}</Link>
    </>
  );
}
