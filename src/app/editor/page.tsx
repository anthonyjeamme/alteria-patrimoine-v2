"use client";

import dynamic from "next/dynamic";

const TextEditor = dynamic(
  () => import("@/makasi/TextEditor/TextEditor").then((mod) => mod.TextEditor),
  { ssr: false }
);

const page = () => {
  return (
    <div
      style={{
        padding: 100,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <TextEditor />
    </div>
  );
};

export default page;
