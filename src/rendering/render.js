
import {assert} from "chai";

/**
 * Renders given raw data into the given Uint8ClampedArray usable as CanvasImageData.data
 *
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {number} slice
 * @param {Uint8ClampedArray} target
 */
export function render(data, dimensions, slice, target) {

  const sliceDataLength = dimensions[1] * dimensions[2];

  assert.typeOf(target, Uint8ClampedArray.name);
  assert.equal(target.length, sliceDataLength * 4);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {
    target[canvasDataIndex] = data[imageDataIndex++];
    canvasDataIndex += 4;
  }
}
