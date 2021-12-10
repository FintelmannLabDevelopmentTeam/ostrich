
import {assert} from "chai";

export class Lut {

  #lut
  #shift

  /**
   * @param {number[]} lut
   * @param {number} shift
   */
  constructor(lut, shift = 0) {

    assert.isNumber(shift);

    this.#lut = lut;
    this.#shift = shift;
  }

  /**
   * @return {number[]}
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
}
