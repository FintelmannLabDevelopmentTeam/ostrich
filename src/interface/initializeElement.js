
import {assert} from "chai";

import {renderElement} from "../rendering";
import {ImageContext, setElementImageContext} from "../context";

/**
 * @param {!HTMLCanvasElement} canvasElement
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {?number} slice
 */
export function initializeElement(canvasElement, data, dimensions, slice) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);

  console.debug(`Initializing ostrich on element:`, canvasElement);

  const ctx = canvasElement.getContext('2d', {

    // see: https://developers.google.com/web/updates/2019/05/desynchronized
    desynchronized: true,
    preserveDrawingBuffer: true,

  });

  const imageContext = new ImageContext(ctx, data, dimensions);

  setElementImageContext(canvasElement, imageContext);

  // todo: embedding app should keep control over canvas size
  // todo: (can be removed as soon as transform is implemented for zoom/pan)
  canvasElement.width = imageContext.dimensions[1];
  canvasElement.height = imageContext.dimensions[2];

  canvasElement.dispatchEvent(new Event('ostrich.initialized', {
    bubbles: true,
  }));

  renderElement(canvasElement);
}
