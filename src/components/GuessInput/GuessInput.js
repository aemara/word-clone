import React from "react";

function GuessInput({ setGuessResults, guessResults, handleGuessSubmit }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuessSubmit(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        value={input}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
