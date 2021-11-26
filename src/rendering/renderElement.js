
import {getElementImageContext} from "../context";
import {render} from "./render";

export function renderElement(canvasElement) {

  const imageContext = getElementImageContext(canvasElement);

  render(imageContext.data, imageContext.dimensions, imageContext.slice, imageContext.canvasImageData.data);

  imageContext.canvasContext.putImageData(imageContext.canvasImageData, 0, 0);
}
