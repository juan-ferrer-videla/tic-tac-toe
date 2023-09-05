"use client";

import { useAtomValue } from "jotai";
import { ticTacToeGridAtom, winnerAtom } from "@/atoms";
import { Cell } from "./Cell";
import { Restart } from "./Restart";

export const Table = () => {
  const [winner] = useAtomValue(winnerAtom);
  const ticTacToeGrid = useAtomValue(ticTacToeGridAtom);

  return (
    <section className="mx-auto grid max-w-md">
      <div className="my-6 mb-10 grid grid-cols-3 gap-2 text-primary md:gap-4">
        {ticTacToeGrid.map((value, index) => (
          <Cell value={value} key={index} index={index} />
        ))}
      </div>
      {winner !== null && (
        <div className="grid">
          <h2 className="mb-4 text-center text-xl text-primary md:mb-8 md:text-4xl">
            {winner ? `"${winner}" wins!` : "Draw"}
          </h2>
          <Restart />
        </div>
      )}
    </section>
  );
};
