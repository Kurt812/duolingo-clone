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
});
