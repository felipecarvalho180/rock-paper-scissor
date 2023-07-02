import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GameOption, GameResult } from "~/utils/enums";
import { getRandomOption } from "~/utils/helpers";
import { checkWinner } from "~/utils/helpers/checkWinner";

interface InitialStateProps {
  score: number;
  selectedOption: number;
  computerSelection: number;
  gameStarted: boolean;
  gameResult?: GameResult;
}

const initialState: InitialStateProps = {
  score: 0,
  selectedOption: -1,
  computerSelection: getRandomOption(),
  gameStarted: false,
  gameResult: undefined,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeSelectedOption: (state, { payload }: PayloadAction<GameOption>) => {
      const winnerResult = checkWinner(payload, state.computerSelection);

      if (winnerResult === GameResult.WIN) {
        state.score += 1;
      }

      if (winnerResult === GameResult.LOSE) {
        state.score = 0;
      }

      state.selectedOption = payload;
      state.gameStarted = true;
      state.gameResult = winnerResult;
    },
    restartGame: (state) => {
      state.gameStarted = false;
      state.selectedOption = -1;
      state.computerSelection = getRandomOption();
      state.gameResult = undefined;
    },
  },
});

export const { changeSelectedOption, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
