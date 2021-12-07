
import {getElementImageContext} from "../context";
import {renderElement} from "../rendering";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {number} windowCenter
 * @param {number} windowWidth
 * @param {boolean} render
 */
export function changeVoiWindow(canvasElement, windowCenter, windowWidth, render = true) {

  const imageContext = getElementImageContext(canvasElement);

  imageContext.voiWindow.center = windowCenter;
  imageContext.voiWindow.width = windowWidth;

  if (render) {
    renderElement(canvasElement);
  }

  canvasElement.dispatchEvent(new CustomEvent('ostrich.voiWindowChanged', {
    detail: {
      newWindowCenter: windowCenter,
      newWindowWidth: windowWidth,
    },
  }));
}
