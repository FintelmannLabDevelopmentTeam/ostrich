
import {getElementImageContext} from "../context";
import {renderElement} from "../rendering";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {number} slice
 * @param {boolean} render
 */
export function jumpToSlice(canvasElement, slice, render = true) {

  const imageContext = getElementImageContext(canvasElement);
  const oldSlice = imageContext.slice;

  imageContext.slice = slice;

  if (render) {
    renderElement(canvasElement);
  }

  canvasElement.dispatchEvent(new CustomEvent('ostrich.sliceChanged', {
    detail: {
      from: oldSlice,
      to: slice,
    },
  }));
}
