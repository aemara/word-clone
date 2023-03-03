import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("Running");

  function handleGuessSubmit(enteredGuess) {
    const nextGuessResults = [...guessResults, enteredGuess];
    const newGuessResults = nextGuessResults;
    setGuessResults(newGuessResults);

    if (enteredGuess === answer) {
      setGameStatus("Won");
    } else if (nextGuessResults.length >= 6) {
      setGameStatus("Lost");
    }
  }

  return (
    <div>
      <GuessResults
        guessResults={guessResults}
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        guessResults={guessResults}
      />
      {gameStatus === "Won" && <WonBanner numOfGuesses={guessResults.length}/>}
      {gameStatus === "Lost" && <LostBanner answer={answer}/>}
    </div>
  );
}

export default Game;
