
import {assert} from "chai";

/**
 * @param {number[]} array
 * @return {{min: number, max: number}}
 */
export function computeLimits(array) {

  assert.isAtLeast(array.length, 1, 'Cannot compute limits of empty array.');

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {

    const value = array[i];

    min = (value < min) ? value : min;
    max = (value > max) ? value : max;
  }

  return {
    min: min,
    max: max,
  };
}
