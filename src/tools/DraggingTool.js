
import {assert} from "chai";

import {Tool} from "./Tool";

export class DraggingTool extends Tool {

  /**
   * Identifies the mouse button to react on.
   *
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
   */
  #mouseButton

  #eventListeners

  #isDragging = false
  #lastOffsetX
  #lastOffsetY

  constructor(mouseButton) {

    assert.isNumber(mouseButton);
    assert.isAtLeast(mouseButton, 0);

    super();

    this.#mouseButton = mouseButton;
    this.#eventListeners = {
      'mousedown': this.#onMouseDown.bind(this),
      'mousemove': this.#onMouseMove.bind(this),
      'mouseup': this.#onMouseUp.bind(this),
      'mouseleave': this.#onMouseLeave.bind(this),
    };
  }

  activate(canvasElement) {

    canvasElement.addEventListener('mousedown', this.#eventListeners.mousedown);
    canvasElement.addEventListener('mousemove', this.#eventListeners.mousemove);
    canvasElement.addEventListener('mouseup', this.#eventListeners.mouseup);
    canvasElement.addEventListener('mouseleave', this.#eventListeners.mouseleave);
  }

  deactivate(canvasElement) {

    canvasElement.removeEventListener('mousedown', this.#eventListeners.mousedown);
    canvasElement.removeEventListener('mousemove', this.#eventListeners.mousemove);
    canvasElement.removeEventListener('mouseup', this.#eventListeners.mouseup);
    canvasElement.removeEventListener('mouseleave', this.#eventListeners.mouseleave);
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
