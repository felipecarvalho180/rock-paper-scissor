"use client";

import { useSelector } from "react-redux";

import { RootState } from "~/store";

import Selection from "./components/selection";
import Result from "./components/result";

export default function Home() {
  const { gameStarted } = useSelector((state: RootState) => state.game);

  return (
    <div className="w-full gap-12 flex justify-center items-center">
      {!gameStarted ? <Selection /> : <Result />}
    </div>
  );
}
