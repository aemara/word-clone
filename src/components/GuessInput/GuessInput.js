import React from "react";

function GuessInput({ setGuessResults, guessResults }) {
  const [input, setInput] = React.useState("");

  function addToGuessResults(input) {
    const newGuessResults = [...guessResults, input];
    setGuessResults(newGuessResults);
  }

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addToGuessResults(input);
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
