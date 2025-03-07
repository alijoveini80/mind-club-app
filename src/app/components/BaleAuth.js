// app/components/BaleAuth.js
"use client";
import { useEffect, useState } from "react";
import { validateInitData } from "@/lib/validate";
import axios from "axios";

const BaleAuth = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const baleInitData = window.Bale?.WebApp?.initData;
    if (!baleInitData) return setStatus("initData not found");
    console.log(baleInitData);

    const isValid = validateInitData(baleInitData);

    if (!isValid) return setStatus("initData not Valid!");

    const user = window.Bale?.WebApp?.initDataUnsafe?.user;
    axios.post("/api/auth/login", { user }).then((res) => {
      localStorage.setItem("token", res.data.token);
      setStatus("Authenticated");
    });
  }, []);

  return (
    <>
      <div>{status}</div>
    </>
  );
};

export default BaleAuth;
