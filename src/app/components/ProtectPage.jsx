"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function ProtectPage({ title, userId }) {
  const router = useRouter();
  const link = title === "dashboard" ? "protected" : "dashboard";
  return (
    <>
      <h1 className="p-2 m-2">
        wellcome to {title} page, {userId}
      </h1>
      {/* <button
        className="bg-amber-700 p-2 m-2 ml-5 mb-6 rounded-2xl"
        type="button"
        onClick={() => router.push(`/${link}`)}
      >
        {link}
      </button> */}
      <button
        className="theme-button hover-button p-2 m-2 ml-5 mb-6 rounded-2xl"
        type="button"
        onClick={() => router.back()}
      >
        back
      </button>
      <Link
        className="theme-button hover-button p-2 m-2 ml-5 rounded-2xl"
        href={`/${link}`}
      >
        {link}
      </Link>
    </>
  );
}
