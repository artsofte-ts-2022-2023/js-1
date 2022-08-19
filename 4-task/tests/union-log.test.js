import { strict as assert } from "assert";
import { unionLog } from "../solution.js";

export const shouldThrowError = () => {
  let isSuccess = false;
  try {
    unionLog("kek", "Hello");
    isSuccess = false;
  } catch (e) {
    isSuccess = true;
  }

  assert.equal(isSuccess, true);
};
