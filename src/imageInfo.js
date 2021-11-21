
import {assert} from "chai";

export function initializeImageInfo(canvasElement, data, dimensions, slice) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);
  assert.notExists(canvasElement.ostrich);
  assert.typeOf(data, Uint16Array.name);
  assert.equal(dimensions.length, 3);
  assert.equal(dimensions.reduce((previousValue, currentValue) => previousValue * currentValue, 1), data.length);

  canvasElement.ostrich = {
    data: data,
    dimensions: dimensions,
    slice: 0,
  };

  updateSlice(canvasElement, slice);
}

export function getImageInfo(canvasElement) {

  assert.typeOf(canvasElement, HTMLCanvasElement.name);
  assert.isNotNull(canvasElement.ostrich);

  return canvasElement.ostrich;
}

export function updateSlice(canvasElement, newSlice) {

  const info = getImageInfo(canvasElement);

  assert.isAbove(newSlice, -1);
  assert.isBelow(newSlice, info.dimensions[0]);

  canvasElement.ostrich.slice = newSlice;
}
