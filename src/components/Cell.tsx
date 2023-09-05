"use client";

import React from "react";
import { useSetAtom, useAtom, useAtomValue } from "jotai";
import { ticTacToeGridAtom, turnAtom, winnerAtom } from "@/atoms";

export const Cell = ({
  index,
  value,
}: {
  index: number;
  value: "x" | "o" | null;
}) => {
  const setTicTacToeGrid = useSetAtom(ticTacToeGridAtom);
  const [turn, setTurn] = useAtom(turnAtom);
  const [winner, winnerCels] = useAtomValue(winnerAtom);

  const handleClick = () => {
    setTicTacToeGrid((prev) => {
      prev[index] = turn;
      return [...prev];
    });
    setTurn((prev) => (prev === "x" ? "o" : "x"));
  };

  return (
    <button
      disabled={value !== null || winner !== null}
      onClick={handleClick}
      className={`grid aspect-square border-collapse place-items-center rounded-md border-2 border-primary p-4 text-2xl disabled:cursor-not-allowed sm:text-4xl md:border-4 md:p-8 md:text-6xl lg:text-7xl ${
        winnerCels.includes(index) ? "bg-primary text-black" : ""
      }`}
    >
      {value === "x" && (
        <svg
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      )}
      {value === "o" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        </svg>
      )}
    </button>
  );
};
