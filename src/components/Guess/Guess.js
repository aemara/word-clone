import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ word, answer}) {
  const result = checkGuess(word, answer);


  // if the player is out of guesses and state is not won, it's a LOSS.

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <Cell key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
