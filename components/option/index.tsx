import React from "react";
import Image from "next/image";
import { GameOption, GameOptionLabels } from "~/utils/enums";

interface Props {
  type: GameOption;
}

function Option({ type }: Props) {
  return (
    <div
      className={`bg-gradient-to-br ${
        type === GameOption.PAPER && "from-paper-light to-paper-dark"
      } ${
        type === GameOption.SCISSOR && "from-scissor-light to-scissor-dark"
      } ${
        type === GameOption.ROCK && "from-rock-light to-rock-dark"
      }  w-48 h-48 rounded-full flex items-center justify-center cursor-pointer `}
    >
      <div className="w-36 h-36 bg-neutral-100 rounded-full flex items-center justify-center">
        <Image
          src={`/icon-${GameOptionLabels[type]}.svg`}
          alt={GameOptionLabels[type]}
          width={80}
          height={80}
          className="-ml-2"
        />
      </div>
    </div>
  );
}

export default Option;
