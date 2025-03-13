import { describe, test, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import WordGuess from "./WordGuess";

describe("WordGuess", () => {
  afterEach(cleanup);

  test("renders initial sentence with gaps", () => {
    // render the WordGame component
    render(<WordGuess />);

    // check if the sentence with gaps appears
    screen.getByText("I _ therefore _ am");
  });

  test("can fill in a blank by clicking an option", () => {
    render(<WordGuess />);

    // query the screen for a button called "Swim"
    const button = screen.getByRole("button", { name: "Swim" });
    // click on the "Swim" button
    fireEvent.click(button);

    // check the sentence text now says "I swim therefore _am"
    screen.getByText("I swim therefore _ am");
  });

  test("can fill in two blank by clicking two options", () => {
    render(<WordGuess />);

    // query the screen for a button called "Swim"
    let button = screen.getByRole("button", { name: "Swim" });
    // click on the "Swim" button
    fireEvent.click(button);

    // query the screen for a button called "Think"
    button = screen.getByRole("button", { name: "Think" });
    // click on the "Think" button
    fireEvent.click(button);

    // check the sentence text now says "I swim therefore think am"
    screen.getByText("I swim therefore think am");
  });

  test("can undo a guess by clicking undo", () => {
    render(<WordGuess />);

    // query the screen for a button called "Swim"
    let button = screen.getByRole("button", { name: "Swim" });
    // click on the "Swim" button
    fireEvent.click(button);

    button = screen.getByRole("button", { name: "Undo" });
    fireEvent.click(button);

    // check the sentence text now says "I _ therefore _ am"
    screen.getByText("I _ therefore _ am");
  });
});
