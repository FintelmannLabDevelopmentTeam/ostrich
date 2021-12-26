
import {Tool} from "./Tool";
import {changeVoiWindow} from "../interface";
import {getElementImageContext} from "../context";

export class VoiWindowingTool extends Tool {

  /**
   * Identifies the mouse button to react on.
   *
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
   */
  #mouseButton

  #imageContext
  #isChanging = false
  #lastOffsetX
  #lastOffsetY

  constructor(mouseButton = 0) {

    super();

    this.#mouseButton = mouseButton;
  }

  activate(canvasElement) {

    this.#imageContext = getElementImageContext(canvasElement);

    canvasElement.addEventListener('mousedown', this.#onMouseDown.bind(this));
    canvasElement.addEventListener('mousemove', this.#onMouseMove.bind(this));
    canvasElement.addEventListener('mouseup', this.#onMouseUp.bind(this));
    canvasElement.addEventListener('mouseleave', this.#onMouseLeave.bind(this));
  }

  /**
   * @param {MouseEvent} event
   */
  #onMouseDown(event) {

    if (event.button === this.#mouseButton) {

      this.#isChanging = true;
    }
  }

  #onMouseMove(evt) {

    if (this.#isChanging && this.#lastOffsetX && this.#lastOffsetY) {

      const diffX = evt.offsetX - this.#lastOffsetX;
      const diffY = evt.offsetY - this.#lastOffsetY;

      const newWindowCenter = this.#imageContext.voiWindow.center + diffX;
      const newWindowWidth = this.#imageContext.voiWindow.width + diffY;

      changeVoiWindow(evt.target, newWindowCenter, newWindowWidth);
    }

    this.#lastOffsetX = evt.offsetX;
    this.#lastOffsetY = evt.offsetY;
  }

  /**
   * @param {MouseEvent} event
   */
  #onMouseUp(event) {

    if (event.button === this.#mouseButton) {

      this.#isChanging = false;
    }
  }

  #onMouseLeave() {

    this.#isChanging = false;
  }
}
