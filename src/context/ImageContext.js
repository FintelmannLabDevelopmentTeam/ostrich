
import {assert} from "chai";

export class ImageContext {

  #canvasContext
  #canvasImageData
  #rawData
  #dimensions
  #slice = 0

  /**
   * @param {!CanvasRenderingContext2D} canvasContext
   * @param {!Uint16Array} rawData
   * @param {!number[]} dimensions
   */
  constructor(canvasContext, rawData, dimensions) {

    assert.typeOf(canvasContext, CanvasRenderingContext2D.name);
    assert.typeOf(rawData, Uint16Array.name);
    assert.isArray(dimensions);
    assert.equal(dimensions.length, 3);
    assert.equal(dimensions.reduce((previousValue, currentValue) => previousValue * currentValue, 1), rawData.length);

    this.#canvasContext = canvasContext;
    this.#canvasImageData = canvasContext.createImageData(dimensions[1], dimensions[2]);
    this.#rawData = rawData;
    this.#dimensions = dimensions;
  }

  /**
   * @returns {Uint16Array}
   */
  get data() {

    return this.#rawData;
  }

  /**
   * @returns {number[]}
   */
  get dimensions() {

    return this.#dimensions;
  }

  /**
   * @returns {number}
   */
  get slice() {

    return this.#slice;
  }

  /**
   * @param {number} slice
   */
  set slice(slice) {

    assert.isTrue(Number.isInteger(slice));
    assert.isAbove(slice, -1);
    assert.isBelow(slice, this.#dimensions[0]);

    this.#slice = slice;
  }

  /**
   * @returns {CanvasRenderingContext2D}
   */
  get canvasContext() {

    return this.#canvasContext;
  }

  /**
   * @returns {ImageData}
   */
  get canvasImageData() {

    return this.#canvasImageData;
  }
}
