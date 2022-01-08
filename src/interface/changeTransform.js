
import {getElementImageContext} from "../context";
import {renderElement} from "../rendering";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {?number} scale
 * @param {?number} translateX
 * @param {?number} translateY
 * @param {boolean} render
 */
export function changeTransform(canvasElement, scale = null, translateX = null, translateY = null, render = true) {

  const imageContext = getElementImageContext(canvasElement);

  imageContext.transform.scale = scale ?? imageContext.transform.scale;
  imageContext.transform.translateX = translateX ?? imageContext.transform.translateX;
  imageContext.transform.translateY = translateY ?? imageContext.transform.translateY;

  if (render) {
    renderElement(canvasElement);
  }

  canvasElement.dispatchEvent(new CustomEvent('ostrich.transformChanged', {
    detail: imageContext.transform,
  }));
}
