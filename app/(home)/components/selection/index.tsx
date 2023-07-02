"use client";

import React from "react";
import { RadioGroup } from "@headlessui/react";
import { GameOption } from "~/utils/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { changeSelectedOption } from "~/store/game.store";
import { Option } from "~/components";

function Selection() {
  const dispatch = useDispatch();
  const { selectedOption } = useSelector((state: RootState) => state.game);

  return (
    <section>
      <RadioGroup
        value={selectedOption}
        onChange={(value: GameOption) => dispatch(changeSelectedOption(value))}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl mb-8">Choose your option</h2>
        <div className="flex flex-row gap-8">
          <RadioGroup.Option value={GameOption.PAPER}>
            {({ checked }) => <Option type={GameOption.PAPER} />}
          </RadioGroup.Option>
          <RadioGroup.Option value={GameOption.SCISSOR}>
            {({ checked }) => <Option type={GameOption.SCISSOR} />}
          </RadioGroup.Option>
          <RadioGroup.Option value={GameOption.ROCK}>
            {({ checked }) => <Option type={GameOption.ROCK} />}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </section>
  );
}

export default Selection;
