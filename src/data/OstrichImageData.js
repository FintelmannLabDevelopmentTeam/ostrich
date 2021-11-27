
import {assert} from "chai";

export class OstrichImageData {

  #data
  #dimensions

  /**
   * @param {Uint16Array} data
   * @param {number[]} dimensions
   */
  constructor(data, dimensions) {

    assert.typeOf(data, Uint16Array.name);
    assert.isArray(dimensions);
    assert.equal(dimensions.length, 3);
    assert.equal(dimensions.reduce((previousValue, currentValue) => previousValue * currentValue, 1), data.length);

    this.#data = data;
    this.#dimensions = dimensions;
  }

  /**
   * @returns {Uint16Array}
   */
  get data() {

    return this.#data;
  }

  /**
   * @returns {number[]}
   */
  get dimensions() {

    return this.#dimensions;
  }
}
