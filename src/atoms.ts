import { atom } from "jotai";

const WIN_COMBO: [number, number, number][] = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const ticTacToeGridAtom = atom<(null | "x" | "o")[]>(
  Array(9).fill(null)
);
export const turnAtom = atom<"x" | "o">("x");
export const winnerAtom = atom<["x" | "o" | null | false, number[]]>((get) => {
  const ticTacToeGrid = get(ticTacToeGridAtom);

  for (let i = 0; i < WIN_COMBO.length; i++) {
    if (
      ticTacToeGrid[WIN_COMBO[i][0]] &&
      ticTacToeGrid[WIN_COMBO[i][0]] === ticTacToeGrid[WIN_COMBO[i][1]] &&
      ticTacToeGrid[WIN_COMBO[i][1]] === ticTacToeGrid[WIN_COMBO[i][2]]
    ) {
      return [ticTacToeGrid[WIN_COMBO[i][0]], WIN_COMBO[i]];
    }
  }

  if (ticTacToeGrid.every((v) => v !== null)) return [false, []];

  return [null, []];
});
export const restartGameAtom = atom(null, (_, set) => {
  set(ticTacToeGridAtom, Array(9).fill(null));
});
