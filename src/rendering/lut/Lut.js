
import {assert} from "chai";

export class Lut {

  /**
   * LUT as Uint8ClampedArray.
   */
  #lut

  /**
   * Is added onto source value before looking up target value.
   * Allows to have negative source values.
   */
  #shift

  /**
   * @param {Uint8ClampedArray} lut
   * @param {number} shift
   */
  constructor(lut, shift = 0) {

    assert.instanceOf(lut, Uint8ClampedArray);
    assert.isNumber(shift);

    this.#lut = lut;
    this.#shift = shift;
  }

  /**
   * @return {Uint8ClampedArray}
   */
  get lut() {

    return this.#lut;
  }

  /**
   * @return {number}
   */
  get shift() {

    return this.#shift;
  }

  /**
   * @param {number} value
   * @return {number}
   */
  lookup(value) {

    assert.isAtLeast(value, -this.#shift);
    assert.isAtMost(value, this.#lut.length - this.#shift);

    return this.#lut[value + this.#shift];
  }
}
