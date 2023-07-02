export enum GameOption {
  PAPER,
  SCISSOR,
  ROCK,
}

export const GameOptionLabels: { [key: number]: string } = {
  0: "paper",
  1: "scissor",
  2: "rock",
};

export enum GameResult {
  WIN,
  LOSE,
  DRAW,
}

export const GameResultLabels: { [key: number]: string } = {
  0: "Win",
  1: "Lose",
  2: "Draw",
};
