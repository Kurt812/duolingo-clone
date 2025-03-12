import { useState } from "react";
import data from "../data.tsx";

export default function WordGuess() {
  const [sentence, setSentence] = useState(data.sentence);

  const displaySentence = sentence
    .map(({ word, guess }) => guess || word)
    .join(" ");

  function addGuess(chosenOption: string) {
    setSentence((prevSentence) => {
      const indexToUpdate = prevSentence.findIndex(
        ({ guess }) => guess === "_"
      );

      return prevSentence.map((obj, index) => {
        return index === indexToUpdate ? { ...obj, guess: chosenOption } : obj;
      });
    });
  }

  function undoLastGuess() {
    setSentence((prevSentence) => {
      const indexToUpdate = prevSentence.findLastIndex(
        ({ guess }) => guess && guess !== "_"
      );

      return prevSentence.map((obj, index) => {
        return index === indexToUpdate ? { ...obj, guess: "_" } : obj;
      });
    });
  }

  return (
    <div>
      <p>{displaySentence}</p>
      <ul>
        {data.options.map((option) => {
          return (
            <li key={option}>
              <button onClick={() => addGuess(option)}>{option}</button>
            </li>
          );
        })}
      </ul>
      <button onClick={undoLastGuess}>Undo</button>
    </div>
  );
}
