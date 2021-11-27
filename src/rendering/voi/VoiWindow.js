
import {assert} from "chai";

export class VoiWindow {

  #center
  #width

  constructor(center, width) {

    this.center = center;
    this.width = width;
  }

  /**
   * @returns {number}
   */
  get center() {

    return this.#center;
  }

  /**
   * @param {number} center
   */
  set center(center) {

    assert.isNumber(center);

    this.#center = center;
  }

  /**
   * @returns {number}
   */
  get width() {

    return this.#width;
  }

  /**
   * @param {number} width
   */
  set width(width) {

    assert.isNumber(width);
    assert.isAbove(width, 0);

    this.#width = width;
  }
}
