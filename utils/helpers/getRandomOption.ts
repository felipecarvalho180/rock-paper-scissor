import { GameOptionLabels } from "../enums";

export function getRandomOption() {
  return Math.floor(Math.random() * Object.keys(GameOptionLabels).length);
}
