
import {assert} from "chai";

import {renderElement} from "../rendering";
import {ImageContext, setElementImageContext} from "../context";
import {computeDefaultVoiWindow} from "../rendering/voi";
import {changeVoiWindow} from "./changeVoiWindow";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {OstrichImageData} imageData
 */
function setDefaultVoiWindow(canvasElement, imageData) {

  const voiWindow = computeDefaultVoiWindow(imageData);

  changeVoiWindow(canvasElement, voiWindow.center, voiWindow.width, false);
}

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {OstrichImageData} imageData
 */
export function initializeElement(canvasElement, imageData) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);

  console.debug(`Initializing ostrich on element:`, canvasElement);

  const ctx = canvasElement.getContext('2d', {

    // see: https://developers.google.com/web/updates/2019/05/desynchronized
    desynchronized: true,
    preserveDrawingBuffer: true,

  });

  const imageContext = new ImageContext(imageData, ctx);

  setElementImageContext(canvasElement, imageContext);

  // todo: embedding app should keep control over canvas size
  // todo: (can be removed as soon as transform is implemented for zoom/pan)
  canvasElement.height = imageData.dimensions[1];
  canvasElement.width = imageData.dimensions[2];

  canvasElement.dispatchEvent(new Event('ostrich.initialized', {
    bubbles: true,
  }));

  setDefaultVoiWindow(canvasElement, imageData);

  renderElement(canvasElement);
}
