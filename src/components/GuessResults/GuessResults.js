import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessResults , answer, setGameStatus}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} word={guessResults[index]} answer={answer} setGameStatus={setGameStatus}/>;
      })}
    </div>
  );
}

export default GuessResults;
