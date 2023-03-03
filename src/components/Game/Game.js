import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  return (
    <div>
      <GuessResults guessResults={guessResults} answer={answer}/>
      <GuessInput
        setGuessResults={setGuessResults}
        guessResults={guessResults}
      />
    </div>
  );
}

export default Game;
