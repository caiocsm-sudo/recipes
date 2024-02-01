import React from "react";

export default function MainPanel({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-base h-screen flex flex-row flex-nowrap w-full">
      {children}
    </section>
  );
}
