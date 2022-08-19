import { strict as assert } from "assert";
import { add } from "../solution.js";

export const simpleAdd = () => {
  const first = add(1, 1) === 2;
  const second = add(0, -23) === -23;
  assert.equal(first && second, true);
}

export const wrongTypes = () => {
  const res = [];
  try {
    add(100, null);
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  try {
    add(100, undefined);
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  try {
    add({}, 20);
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  try {
    add({}, [])
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  try {
    add(true, 29)
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  try {
    add(Symbol('kek'), 2)
  } catch (e) {
    if (e.message === 'WrongType') {
      res.push(1);
    }
  }

  assert.equal(res.reduce((f, s) => f + s, 0), 6)
}
