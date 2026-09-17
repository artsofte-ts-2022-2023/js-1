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
  const third = isArraysContentAndOrderEquals([1, 2, 3, 4, 5], range(1, 5, 1));
  const fourth = isArraysContentAndOrderEquals([1, 4, 7], range(1, 7, 3));
  const fifth = isArraysContentAndOrderEquals([], range(5, 3));

  assert.equal(first && second && third && fourth && fifth, true);
}