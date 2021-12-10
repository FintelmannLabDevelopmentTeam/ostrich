
import {assert} from "chai";

import {getLinearVoiTransform, getVoiLut} from "./voi";

/**
 * Renders given imageData into the given Uint8ClampedArray usable as CanvasImageData.data
 *
 * @param {OstrichImageData} imageData
 * @param {number} slice
 * @param {VoiWindow} voiWindow
 * @param {Uint8ClampedArray} target
 */
export function render(imageData, slice, voiWindow, target) {

  const sliceDataLength = imageData.dimensions[1] * imageData.dimensions[2];

  assert.typeOf(target, Uint8ClampedArray.name);
  assert.equal(target.length, sliceDataLength * 4);

  const voiTransform = getLinearVoiTransform(voiWindow, 255);
  const {offset: lutOffset, lut} = getVoiLut(imageData, voiTransform);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {
    target[canvasDataIndex] = lut[imageData.data[imageDataIndex++] + lutOffset];
    canvasDataIndex += 4;
  }
}
