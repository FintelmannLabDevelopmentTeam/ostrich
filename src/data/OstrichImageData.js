
import {assert} from "chai";

import {computeLimits} from "../math";

export class OstrichImageData {

  #data
  #dimensions // dimensions as depth, height, width

  #limits

  /**
   * @param {Int16Array} data
   * @param {number[]} dimensions
   */
  constructor(data, dimensions) {

    assert.typeOf(data, Int16Array.name);
    assert.isArray(dimensions);
    assert.equal(dimensions.length, 3);
    assert.equal(dimensions.reduce((previousValue, currentValue) => previousValue * currentValue, 1), data.length);

    this.#data = data;
    this.#dimensions = dimensions;
  }

  /**
   * @returns {Int16Array}
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

  /**
   * @return {number}
   */
  getDepth() {

    return this.#dimensions[0];
  }

  /**
   * @return {number}
   */
  getHeight() {

    return this.#dimensions[1];
  }

  /**
   * @return {number}
   */
  getWidth() {

    return this.#dimensions[2];
  }

  /**
   * @return {{min: number, max: number}}
   */
  getLimits() {

    if (!this.#limits) {

      this.#limits = computeLimits(this.#data);
    }

    return this.#limits;
  }
}
