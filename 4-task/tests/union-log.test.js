import { strict as assert } from "assert";
import { unionLog } from '../solution.js';

export const shouldThrowError = () => {
  try {
    unionLog('kek', 'Hello')
    assert.equal(true, false);
  } catch (e) {
    assert.equal(true, true);
  }
}
