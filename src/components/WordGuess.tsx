import { useState } from "react";
import data from "../data.tsx";

export default function WordGuess() {
  const [sentence, setSentence] = useState(data.sentence);

  const displaySentence = data.sentence
    .map(({ word, guess }) => guess || word)
    .join(" ");

  return (
    <>
      <h1>Fill in the blank!</h1>
      <p>{displaySentence}</p>
      <ul>
        <li>
          <button>Swim</button>
        </li>
      </ul>
    </>
  );
}
