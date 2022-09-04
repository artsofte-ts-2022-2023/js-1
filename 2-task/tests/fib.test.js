import { strict as assert } from "assert";
import { fib } from "../solution.js";

export const simpleFib = () => {
  const first = fib(3) === '2';
  const second = fib(7) === "13";

  assert.equal(first && second, true);
}
