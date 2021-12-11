
import {assert} from "chai";

import {OstrichImageData} from "../../data";
import {Lut} from "../lut";

/**
 * @param {OstrichImageData} imageData
 * @param {number} slice
 * @param {ImageData} canvasImageData
 * @param {Lut} lut
 */
export function copyToCanvasImageData(imageData, slice, canvasImageData, lut) {

  assert.instanceOf(imageData, OstrichImageData);
  assert.isNumber(slice);
  assert.isAtLeast(slice, 0)
  assert.instanceOf(canvasImageData, ImageData);
  assert.instanceOf(lut, Lut);

  const sliceDataLength = imageData.dimensions[1] * imageData.dimensions[2];

  const sourceData = imageData.data;
  const targetData = canvasImageData.data;

  assert.equal(targetData.length, sliceDataLength * 4);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {

    targetData[canvasDataIndex] = lut.lut[sourceData[imageDataIndex] + lut.shift];

    imageDataIndex += 1;
    canvasDataIndex += 4;
  }
}
