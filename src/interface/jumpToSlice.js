
import {getElementImageContext} from "../context";
import {renderElement} from "../rendering";

export function jumpToSlice(canvasElement, slice) {

  const imageContext = getElementImageContext(canvasElement);

  imageContext.slice = slice;

  renderElement(canvasElement);
}
