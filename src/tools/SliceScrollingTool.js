
import {getElementImageContext} from "../context";
import {jumpToSlice} from "../interface";
import {Tool} from "./Tool";

export class SliceScrollingTool extends Tool {

  activate(canvasElement) {

    canvasElement.addEventListener('wheel', SliceScrollingTool.#wheelEventHandler);
  }

  deactivate(canvasElement) {

    canvasElement.removeEventListener('wheel', SliceScrollingTool.#wheelEventHandler);
  }

  static #wheelEventHandler(event) {

    const canvasElement = event.target;
    const imageContext = getElementImageContext(canvasElement);

    const sliceDelta = (event.deltaY > 0) ? 1 : -1;
    const newSlice = imageContext.slice + sliceDelta;

    if (newSlice >= 0 && newSlice < imageContext.imageData.dimensions[0]) {

      jumpToSlice(canvasElement, newSlice);
    }
  }
}
