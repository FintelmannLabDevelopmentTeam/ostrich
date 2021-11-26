
import {assert} from "chai";

/**
 * Renders given raw data into the given Uint8ClampedArray usable as CanvasImageData.data
 *
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {number} slice
 * @param {Uint8ClampedArray} targetImageDataData
 */
export function render(data, dimensions, slice, targetImageDataData) {

  const sliceDataLength = dimensions[1] * dimensions[2];

  assert.equal(targetImageDataData.length, sliceDataLength * 4);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {
    targetImageDataData[canvasDataIndex] = data[imageDataIndex++];
    canvasDataIndex += 4;
  }
}
