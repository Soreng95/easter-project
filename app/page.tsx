"use client";

import { useState } from "react";

const EGG_COUNT = 9;

export default function HomePage() {
  const [goldenEggIndex] = useState(() =>
    Math.floor(Math.random() * EGG_COUNT),
  );

  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedEgg, setSelectedEgg] = useState<number | null>(null);
  const [hasWon, setHasWon] = useState(false);

  const handleEggClick = (index: number) => {
    if (hasWon) return;

    setSelectedEgg(index);
    setTries((prev) => prev + 1);

    if (index === goldenEggIndex) {
      setMessage(`You won with ${tries + 1} tries`);
      setHasWon(true);
      return;
    }

    setMessage("Try again");
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-8 shadow-lg sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Find the Golden Egg
            </h1>
            <p className="mt-3 text-gray-600">
              Click an egg and test your luck.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: EGG_COUNT }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleEggClick(index)}
                className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white text-5xl shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                🥚
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-gray-800">Tries: {tries}</p>
            <p className="mt-2 text-xl font-semibold text-gray-900">
              {message}
            </p>
          </div>
        </div>
      </div>

      {hasWon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">🎉 You win!</h2>

            <p className="mt-3 text-gray-600">
              You found the golden egg in{" "}
              <span className="font-semibold">{tries}</span> tries.
            </p>

            <button
              onClick={resetGame}
              className="mt-6 rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              Play again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
