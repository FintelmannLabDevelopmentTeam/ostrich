
import {assert} from "chai";

import {getLinearVoiTransform, getVoiLut} from "./voi";
import {copyToCanvasImageData} from "./canvas";

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
  const lut = getVoiLut(imageData, voiTransform);

  copyToCanvasImageData(imageData, slice, target, lut);
}
