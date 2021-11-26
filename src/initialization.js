
import {assert} from "chai";
import {renderElement} from "./rendering";
import {getElementImageContext, ImageContext, initializeElementImageContext} from "./context";

function wheelEventHandler(event) {

  const canvasElement = event.target;
  const imageContext = getElementImageContext(canvasElement);

  const sliceDelta = (event.deltaY > 0) ? 1 : -1;
  const newSlice = imageContext.slice + sliceDelta;

  if (newSlice >= 0 && newSlice < imageContext.dimensions[0]) {

    imageContext.slice = newSlice;

    renderElement(canvasElement);
  }
}

/**
 * @param {!HTMLCanvasElement} canvasElement
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {?number} slice
 */
export function initializeElement(canvasElement, data, dimensions, slice) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);

  const ctx = canvasElement.getContext('2d', {

    // see: https://developers.google.com/web/updates/2019/05/desynchronized
    desynchronized: true,
    preserveDrawingBuffer: true,

  });

  const imageContext = new ImageContext(ctx, data, dimensions);

  initializeElementImageContext(canvasElement, imageContext);

  // todo: embedding app should keep control over canvas size
  canvasElement.width = imageContext.dimensions[1];
  canvasElement.height = imageContext.dimensions[2];

  canvasElement.addEventListener('wheel', wheelEventHandler);

  renderElement(canvasElement);
}
