
import {getElementImageContext} from "../context";
import {render} from "./render";

/**
 * @param {HTMLCanvasElement} canvasElement
 */
export function renderElement(canvasElement) {

  const imageContext = getElementImageContext(canvasElement);

  render(imageContext);

  canvasElement.dispatchEvent(new Event('ostrich.rendered', {
    bubbles: true,
  }));
}
