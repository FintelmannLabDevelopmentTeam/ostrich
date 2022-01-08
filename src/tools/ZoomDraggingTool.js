
import {DraggingTool} from "./DraggingTool";
import {getElementImageContext} from "../context";
import {changeTransform} from "../interface";

export class ZoomDraggingTool extends DraggingTool {

  #originX
  #originY

  constructor(mouseButton = 2) {

    super(mouseButton);
  }

  _startDrag(event) {

    this.#originX = event.clientX;
    this.#originY = event.clientY;
  }

  _drag(event, diffX, diffY) {

    const imageContext = getElementImageContext(event.target);

    const scaleFactor = 0.005;
    const newScale = imageContext.transform.scale + diffY * scaleFactor;

    const widthDiff = imageContext.imageData.getWidth() * (imageContext.transform.scale - newScale);
    const heightDiff = imageContext.imageData.getHeight() * (imageContext.transform.scale - newScale);

    const boundingRect = imageContext.canvas.getBoundingClientRect();
    const heightFract = (this.#originY - boundingRect.top) / boundingRect.height;
    const widthFract = (this.#originX - boundingRect.left) / boundingRect.width;

    changeTransform(
      event.target,
      newScale,
      imageContext.transform.translateX + widthDiff * widthFract,
      imageContext.transform.translateY + heightDiff * heightFract,
    );
  }
}
