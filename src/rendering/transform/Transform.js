
import {assert} from "chai";

export class Transform {

  // scale=1 corresponds to original size
  // scale<1 corresponds to image being smaller than viewport
  // scale>1 corresponds to image being larger than viewport
  #scale

  // translation of rendering wrt viewport
  #translateX // (in width)
  #translateY // (in height)

  constructor(scale = 1, translateX = 0, translateY = 0) {

    this.scale = scale;
    this.translateX = translateX;
    this.translateY = translateY;
  }

  /**
   * @returns {number}
   */
  get scale() {

    return this.#scale;
  }

  /**
   * @param {number} scale
   */
  set scale(scale) {

    assert.isNumber(scale);
    assert.isAbove(scale, 0);

    this.#scale = scale;
  }

  /**
   * @returns {number}
   */
  get translateX() {

    return this.#translateX;
  }

  /**
   * @param {number} translateX
   */
  set translateX(translateX) {

    assert.isNumber(translateX);

    this.#translateX = translateX;
  }

  /**
   * @returns {number}
   */
  get translateY() {

    return this.#translateY;
  }

  /**
   * @param {number} translateY
   */
  set translateY(translateY) {

    assert.isNumber(translateY);

    this.#translateY = translateY;
  }
}
