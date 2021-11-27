
import {assert} from "chai";

/**
 * Renders given imageData into the given Uint8ClampedArray usable as CanvasImageData.data
 *
 * @param {OstrichImageData} imageData
 * @param {number} slice
 * @param {Uint8ClampedArray} target
 */
export function render(imageData, slice, target) {

  const sliceDataLength = imageData.dimensions[1] * imageData.dimensions[2];

  assert.typeOf(target, Uint8ClampedArray.name);
  assert.equal(target.length, sliceDataLength * 4);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {
    target[canvasDataIndex] = imageData.data[imageDataIndex++];
    canvasDataIndex += 4;
  }
}
