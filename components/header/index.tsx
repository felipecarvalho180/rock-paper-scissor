"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/store";

function Header() {
  const { score } = useSelector((state: RootState) => state.game);

  return (
    <header className="flex justify-between max-w-3xl w-full items-center border border-neutral-200 p-6 rounded-lg">
      <Image src="/logo.svg" alt="Logo" width={150} height={100} />

      <div className="flex flex-col bg-neutral-200 px-12 py-4 justify-start items-center rounded-lg">
        <h2 className="font-semibold text-2xl text-neutral-700">Score</h2>
        <strong className="font-bold text-5xl text-neutral-700">{score}</strong>
      </div>
    </header>
  );
}

export default Header;
