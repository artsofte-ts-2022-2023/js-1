import { strict as assert } from "assert";
import { range, sum } from '../solution.js';

const isArraysContentAndOrderEquals = (first, second) => {
  let isCorrect = true;

  first.forEach((el, idx) => {
    if (el !== second[idx]) {
      isCorrect = false;
    }
  })

  return isCorrect;
}

export const sumSimpleTest = () => {
  const first = sum([1, 2, 3]) === 6;
  const second = sum([100]) === 100;
  const third = sum([1, -1, 0, 10]) === 10;

  assert.equal(first && second && third, true);
}

export const rangeSimpleTest = () => {
  const first = isArraysContentAndOrderEquals([1, 2, 3], range(1, 3));
  const second = isArraysContentAndOrderEquals([1, 3], range(1, 3, 2));

  assert.equal(first && second, true);
}
