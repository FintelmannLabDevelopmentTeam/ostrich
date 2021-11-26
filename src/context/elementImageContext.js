
import {assert} from "chai";
import {ImageContext} from "./ImageContext";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {ImageContext} imageContext
 */
export function setElementImageContext(canvasElement, imageContext) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);
  assert.isTrue(Object.is(canvasElement, imageContext.canvasContext.canvas));
  assert.isUndefined(canvasElement.ostrichImageContext);

  canvasElement.ostrichImageContext = imageContext;
}

/**
 * @param {HTMLCanvasElement} canvasElement
 * @returns {ImageContext}
 */
export function getElementImageContext(canvasElement) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);
  assert.isNotNull(canvasElement.ostrichImageContext);

  return canvasElement.ostrichImageContext;
}
