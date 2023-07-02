import { GameResult } from "../enums";

export function checkWinner(player: number, player2: number) {
  if (player === player2) return GameResult.DRAW;

  if (player == 0 && player2 == 2) return GameResult.WIN;
  if (player == 1 && player2 == 0) return GameResult.WIN;
  if (player == 2 && player2 == 1) return GameResult.WIN;

  return GameResult.LOSE;
}
