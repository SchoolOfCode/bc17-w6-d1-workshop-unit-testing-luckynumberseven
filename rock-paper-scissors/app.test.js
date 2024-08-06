//import & export app.js
//-->this isn't needed for the barebones test
//import test and expect from vitest
//create basic test function that will pass

//import {test} from "vitest"

import { expect, test } from "vitest";
import {
  ROCK,
  PAPER,
  SCISSORS,
  WIN,
  DRAW,
  LOSS,
  calculateRoundResult,
  generateComputerMove,
  calculateNewScores,
} from "./app.js";

// test("barebones test"); //this passed

test("Both players chose rock. It's a draw..", () => {
  //AssertionError: expected { outcome: 'draw', …(1) } to be { outcome: 'draw', …(1) } // Object.is equality

  //If it should pass with deep equality, replace "toBe" with "toStrictEqual"

  expect(calculateRoundResult(ROCK, ROCK)).toStrictEqual({
    outcome: DRAW,
    message: "Both players chose rock. It's a draw.",
  });
});
