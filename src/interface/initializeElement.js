
import {assert} from "chai";
import {renderElement} from "../rendering";
import {getElementImageContext, ImageContext, setElementImageContext} from "../context";
import {jumpToSlice} from "./jumpToSlice";

function wheelEventHandler(event) {

  const canvasElement = event.target;
  const imageContext = getElementImageContext(canvasElement);

  const sliceDelta = (event.deltaY > 0) ? 1 : -1;
  const newSlice = imageContext.slice + sliceDelta;

  if (newSlice >= 0 && newSlice < imageContext.dimensions[0]) {

    jumpToSlice(canvasElement, newSlice);
  }
}

/**
 * @param {!HTMLCanvasElement} canvasElement
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {?number} slice
 */
export function initializeElement(canvasElement, data, dimensions, slice) {

  console.info(`Initializing ostrich on element:`, canvasElement);

  assert.typeOf(canvasElement, HTMLCanvasElement.name);

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

  canvasElement.addEventListener('wheel', wheelEventHandler);

  canvasElement.dispatchEvent(new Event('ostrich.initialized', {
    bubbles: true,
  }));

  renderElement(canvasElement);
}
