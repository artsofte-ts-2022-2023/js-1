import { strict as assert } from "assert";
import { palindrome } from "../solution.js";

export const isPalindrom = () => {
  const first = palindrome("Hello") === false;
  const second = palindrome("AnA") === true;
  const third = palindrome("racecar") === true;
  const fourth = palindrome("") === false;

  assert.equal(first && second && third && fourth, true);
};
