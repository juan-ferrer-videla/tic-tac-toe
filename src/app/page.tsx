import { Game } from "../components/Game";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl p-8 ">
      <h1 className="mb-6 text-center text-4xl font-medium text-primary sm:text-5xl md:mb-10 md:text-7xl lg:mb-14">
        Tic-Tac-Toe
      </h1>
      <Game />
    </main>
  );
}
