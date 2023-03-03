import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);
  console.log(result);
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
