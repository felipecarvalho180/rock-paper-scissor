"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "~/components";
import { RootState } from "~/store";
import { restartGame } from "~/store/game.store";
import { GameResultLabels } from "~/utils/enums";

function Result() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { selectedOption, computerSelection, gameResult } = useSelector(
    (state: RootState) => state.game
  );

  return (
    <section className="flex flex-col items-center gap-12">
      <div className="flex gap-20">
        <div className="flex flex-col items-center gap-8">
          <span className="text-neutral-200 text-xl">Your choose</span>
          <Option type={selectedOption} />
        </div>
        <div className="flex flex-col items-center gap-8">
          <span className="text-neutral-200 text-xl">Computer choose</span>
          <Option type={computerSelection} />
        </div>
      </div>

      {gameResult !== undefined && (
        <h1 className="text-6xl">You {GameResultLabels[gameResult]}!</h1>
      )}

      <button
        className="bg-transparent border border-neutral-200 px-6 py-4 rounded-lg uppercase hover:bg-neutral-200 hover:text-neutral-700 transition duration-150"
        onClick={() => dispatch(restartGame())}
      >
        Play again
      </button>
    </section>
  );
}

export default Result;
