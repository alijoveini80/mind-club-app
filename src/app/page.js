"use client";
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p id="wellcome">
        {" "}
        wellcome, {window.Bale ? window.Bale.initData.user.first_name : "user"}
      </p>
    </>
  );
}
