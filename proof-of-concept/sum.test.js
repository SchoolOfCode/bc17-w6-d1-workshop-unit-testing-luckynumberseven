// TICKET 3
// import `test` and `expect` functions from Vitest
import { expect, test } from "vitest";

// import the `sum` function from sum.js
import sum from "./sum.js";

// create a bare bones test
test("bare bones test");

// run Vitest to check that it detects and passes the new test
// Here we just ran "npm run test" to these the now commented out bare bones function above

// inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12
test("adds 5 + 7 to equal 12", function () {
  expect(sum(5, 7)).toBe(12);
});
