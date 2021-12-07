
import {Tool} from "./Tool";
import {changeVoiWindow} from "../interface";
import {getElementImageContext} from "../context";

export class VoiWindowingTool extends Tool {

  #imageContext
  #isChanging = false
  #lastOffsetX
  #lastOffsetY

  activate(canvasElement) {

    this.#imageContext = getElementImageContext(canvasElement);

    canvasElement.addEventListener('mousedown', this.#onMouseDown.bind(this));
    canvasElement.addEventListener('mousemove', this.#onMouseMove.bind(this));
    canvasElement.addEventListener('mouseup', this.#onMouseUp.bind(this));
    canvasElement.addEventListener('mouseleave', this.#onMouseLeave.bind(this));
  }

  #onMouseDown() {

    this.#isChanging = true;
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

  #onMouseUp() {

    this.#isChanging = false;
  }

  #onMouseLeave() {

    this.#isChanging = false;
  }
}
