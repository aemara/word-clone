import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div class="guess-results">
      {guessResults.map((word) => {
        return <p className="guess">{word}</p>;
      })}
    </div>
  );
}

export default GuessResults;
