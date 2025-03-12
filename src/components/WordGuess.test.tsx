import { describe, test, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import WordGuess from "./WordGuess";

describe("WordGuess", () => {
  afterEach(cleanup);
  test("loads the initial sentence with blanks", () => {
    render(<WordGuess />);

    screen.getByText("I _ therefore _ am");
  });
  test("user can guess from a number of options", () => {
    render(<WordGuess />);

    fireEvent.click(screen.getByText("swim"));
    screen.getByText("I swim therefore _ am");

    fireEvent.click(screen.getByText("they"));
    screen.getByText("I swim therefore they am");
  });
  test("user can undo a choice", () => {
    render(<WordGuess />);

    fireEvent.click(screen.getByText("swim"));
    fireEvent.click(screen.getByText("Undo"));

    screen.getByText("I _ therefore _ am");
  });
  test.todo("check button is disabled when there are still guesses unfilled");
  test.todo("");
});
