
import {assert} from "chai";

import {getElementImageContext} from "../context";
import {Tool} from "../tools";

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {Tool} tool
 */
export function addTool(canvasElement, tool) {

  assert.instanceOf(tool, Tool);

  const imageContext = getElementImageContext(canvasElement);
  imageContext.addTool(tool);

  canvasElement.dispatchEvent(new CustomEvent('ostrich.toolAdded', {
    detail: {
      tool: tool,
    },
  }));
}

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {string} name
 */
export function activateTool(canvasElement, name) {

  const imageContext = getElementImageContext(canvasElement);
  const tool = imageContext.getTool(name);

  tool.activate(canvasElement);

  canvasElement.dispatchEvent(new CustomEvent('ostrich.toolActivated', {
    detail: {
      tool: tool,
    },
  }));
}

/**
 * @param {HTMLCanvasElement} canvasElement
 * @param {string} name
 */
export function deactivateTool(canvasElement, name) {

  const imageContext = getElementImageContext(canvasElement);
  const tool = imageContext.getTool(name);

  tool.deactivate(canvasElement);

  canvasElement.dispatchEvent(new CustomEvent('ostrich.toolDeactivated', {
    detail: {
      tool: tool,
    },
  }));
}
