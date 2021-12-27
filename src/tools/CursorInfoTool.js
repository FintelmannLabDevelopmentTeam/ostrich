
import {getElementImageContext} from "../context";
import {Tool} from "./Tool";
import {viewportToImageCoordinates} from "../viewport";

export class CursorInfoTool extends Tool {

  #imageContext
  #displayElement

  activate(canvasElement) {

    this.#imageContext = getElementImageContext(canvasElement);

    this.#displayElement = document.createElement('div');
    this.#displayElement.style.cssText = `
      position: fixed;
      color: red;
    `;
    document.body.appendChild(this.#displayElement);

    document.addEventListener('mousemove', this.#mouseMoveEventHandler.bind(this));
  }

  /**
   * @param {MouseEvent} event
   */
  #mouseMoveEventHandler(event) {

    const canvasRect = this.#imageContext.canvas.getBoundingClientRect();

    this.#displayElement.style.display = `none`;

    if (
      event.clientX < canvasRect.x || event.clientX > (canvasRect.x + canvasRect.width) ||
      event.clientY < canvasRect.y || event.clientY > (canvasRect.y + canvasRect.height)
    ) {
      // cursor position is outside viewport
      return;
    }

    const imageCoordinates = viewportToImageCoordinates(
      this.#imageContext.imageData,
      this.#imageContext.transform,
      event.clientX - canvasRect.x,
      event.clientY - canvasRect.y,
    );

    if (imageCoordinates)
    {
      const imageValue = this.#imageContext.imageData.getValueAt(this.#imageContext.slice, imageCoordinates.y, imageCoordinates.x);

      this.#displayElement.innerHTML = `Coordinates: ${this.#imageContext.slice}, ${Math.floor(imageCoordinates.y)}, ${Math.floor(imageCoordinates.x)}<br />Value: ${imageValue}`;
      this.#displayElement.style.top = `${event.clientY + 25}px`;
      this.#displayElement.style.left = `${event.clientX + 25}px`;
      this.#displayElement.style.display = `block`;
    }
  }
}
