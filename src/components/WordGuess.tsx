import { useState } from "react";
import data from "../data.tsx";

export default function WordGuess() {
  const [sentence, setSentence] = useState(data.sentence);

  function handleGuess(event: React.MouseEvent<HTMLButtonElement>) {
    const word = event.currentTarget.textContent;
    setSentence((prevSentence) => {
      const index = prevSentence.findIndex((item) => item.guess === "_");
      if (index === -1) return prevSentence;
      return prevSentence.map((item, i) => {
        if (i === index) {
          return { word: item.word, guess: `${word?.toLowerCase()}` };
        } else {
          return item;
        }
      });
    });

    console.log(sentence);
  }

  function handleUndo() {
    setSentence((prevSentence) => {
      const index = prevSentence.findLastIndex(
        (item) => item.guess !== "_" && item.guess != null
      );
      if (index === -1) return prevSentence;
      return prevSentence.map((item, i) => {
        if (i === index) {
          return { word: item.word, guess: "_" };
        } else {
          return item;
        }
      });
    });
  }

  const displaySentence = sentence
    .map(({ word, guess }) => guess || word)
    .join(" ");

  return (
    <>
      <h1>Fill in the blank!</h1>
      <p>{displaySentence}</p>
      <ul>
        <li>
          <button onClick={handleGuess}>Swim</button>
        </li>
        <li>
          <button onClick={handleGuess}>Think</button>
        </li>
        <li>
          <button onClick={handleGuess}>Dance</button>
        </li>
      </ul>
      <button onClick={handleUndo}>Undo</button>
    </>
  );
}

// setSentence([
//   {
//     word: "I",
//     guess: null,
//   },
//   {
//     word: "think",
//     guess: `${word?.toLowerCase()}`,
//   },
//   {
//     word: "therefore",
//     guess: null,
//   },
//   {
//     word: "I",
//     guess: "_",
//   },
//   {
//     word: "am",
//     guess: null,
//   },
// ]);
