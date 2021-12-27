
import {assert} from "chai";

import {Tool} from "../tools";
import {OstrichImageData} from "../data";
import {VoiWindow} from "../rendering/voi";
import {Transform} from "../rendering/transform";

export class ImageContext {

  #imageData
  #canvasContext
  #canvasImageData
  #voiWindow
  #transform
  #slice = 0
  #tools = {}

  /**
   * @param {OstrichImageData} imageData
   * @param {CanvasRenderingContext2D} canvasContext
   */
  constructor(imageData, canvasContext) {

    assert.instanceOf(imageData, OstrichImageData);
    assert.typeOf(canvasContext, CanvasRenderingContext2D.name);
    assert.isNotEmpty(canvasContext.canvas.id, 'Canvas element has to have an id.');

    this.#imageData = imageData;
    this.#canvasContext = canvasContext;
    this.#canvasImageData = canvasContext.createImageData(imageData.dimensions[2], imageData.dimensions[1]);
    this.#voiWindow = new VoiWindow(0, 1);
    this.#transform = new Transform();
  }

  /**
   * @returns {OstrichImageData}
   */
  get imageData() {

    return this.#imageData;
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
    assert.isBelow(slice, this.#imageData.dimensions[0]);

    this.#slice = slice;
  }

  /**
   * @returns {CanvasRenderingContext2D}
   */
  get canvasContext() {

    return this.#canvasContext;
  }

  /**
   * @return {HTMLCanvasElement}
   */
  get canvas() {

    return this.#canvasContext.canvas;
  }

  /**
   * @returns {ImageData}
   */
  get canvasImageData() {

    return this.#canvasImageData;
  }

  /**
   * @returns {VoiWindow}
   */
  get voiWindow() {

    return this.#voiWindow;
  }

  /**
   * @return {Transform}
   */
  get transform() {

    return this.#transform;
  }

  getImageIdentifier() {

    return this.#canvasContext.canvas.id;
  }

  /**
   * @returns {Tool[]}
   */
  get tools() {

    return this.#tools.values();
  }

  /**
   * @param name
   * @returns {Tool}
   */
  getTool(name) {

    assert.property(this.#tools, name);

    return this.#tools[name];
  }

  /**
   * @param {Tool} tool
   */
  addTool(tool) {

    assert.instanceOf(tool, Tool);

    const name = tool.constructor.name;

    assert.notProperty(this.#tools, name);

    this.#tools[name] = tool;
  }

  removeTool(name) {

    assert.property(this.#tools, name);

    delete this.#tools[name];
  }
}
