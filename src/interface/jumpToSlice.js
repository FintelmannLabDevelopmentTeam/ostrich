
import {getElementImageContext} from "../context";
import {renderElement} from "../rendering";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {number} slice
 */
export function jumpToSlice(canvasElement, slice) {

  const imageContext = getElementImageContext(canvasElement);
  const oldSlice = imageContext.slice;

  imageContext.slice = slice;

  renderElement(canvasElement);

  canvasElement.dispatchEvent(new CustomEvent('ostrich.sliceChange', {
    detail: {
      from: oldSlice,
      to: slice,
    },
  }));
}
