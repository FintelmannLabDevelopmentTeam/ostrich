
import {assert} from "chai";
import {getImageInfo, initializeImageInfo, updateSlice} from "./imageInfo";
import {renderElement} from "./rendering";

function wheelEventHandler(event) {

  const canvasElement = event.target;

  const imageInfo = getImageInfo(canvasElement);
  const sliceDelta = (event.deltaY > 0) ? 1 : -1;
  const newSlice = imageInfo.slice + sliceDelta;

  if (newSlice >= 0 && newSlice < imageInfo.dimensions[0]) {

    updateSlice(canvasElement, newSlice);

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

  initializeImageInfo(canvasElement, data, dimensions, slice);

  canvasElement.addEventListener('wheel', wheelEventHandler);

  renderElement(canvasElement);
}
