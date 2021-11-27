
import {getElementImageContext} from "../context";
import {render} from "./render";

export function renderElement(canvasElement) {

  const imageContext = getElementImageContext(canvasElement);

  render(imageContext.imageData, imageContext.slice, imageContext.canvasImageData.data);

  imageContext.canvasContext.putImageData(imageContext.canvasImageData, 0, 0);

  canvasElement.dispatchEvent(new Event('ostrich.rendered', {
    bubbles: true,
  }));
}
