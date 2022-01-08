
import {assert} from "chai";

import {Tool} from "./Tool";

export class DraggingTool extends Tool {

  /**
   * Identifies the mouse button to react on.
   *
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
   */
  #mouseButton

  #isDragging = false
  #lastOffsetX
  #lastOffsetY

  constructor(mouseButton) {

    assert.isNumber(mouseButton);
    assert.isAtLeast(mouseButton, 0);

    super();

    this.#mouseButton = mouseButton;
  }

  activate(canvasElement) {

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

      this.#startDrag(event);
    }
  }

  #onMouseMove(evt) {

    if (this.#isDragging && this.#lastOffsetX && this.#lastOffsetY) {

      const diffX = evt.offsetX - this.#lastOffsetX;
      const diffY = evt.offsetY - this.#lastOffsetY;

      this._drag(evt, diffX, diffY);
    }

    this.#lastOffsetX = evt.offsetX;
    this.#lastOffsetY = evt.offsetY;
  }

  /**
   * @param {MouseEvent} event
   */
  #onMouseUp(event) {

    if (event.button === this.#mouseButton) {

      this.#stopDrag(event);
    }
  }

  #onMouseLeave(event) {

    this.#stopDrag(event);
  }

  #startDrag(event) {

    this.#isDragging = true;

    this._startDrag(event);
  }

  #stopDrag(event) {

    this.#isDragging = false;

    this._stopDrag(event);
  }

  _startDrag(event) {

    // to be implemented by tool
  }

  _drag(event) {

    // to be implemented by tool
  }

  _stopDrag(event) {

    // to be implemented by tool
  }
}
