"use client";

import React from "react";
import { useSetAtom } from "jotai";
import { restartGameAtom } from "@/atoms";

export const Restart = () => {
  const restart = useSetAtom(restartGameAtom);

  return (
    <button
      className="rounded bg-primary px-6 py-2 font-semibold text-black"
      onClick={() => {
        restart();
      }}
    >
      Restart
    </button>
  );
};
