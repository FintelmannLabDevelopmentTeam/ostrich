
import {assert} from "chai";

import {OstrichImageData} from "../../data";

/**
 * @param {OstrichImageData} imageData
 * @param {function(number): number} transform
 * @return {{offset: number, lut: Uint8ClampedArray}}
 */
export function getVoiLut(imageData, transform) {

  assert.instanceOf(imageData, OstrichImageData);
  assert.isFunction(transform);

  const {min: minPixelValue, max: maxPixelValue} = imageData.getLimits();

  const offset = -minPixelValue;
  const lut = new Uint8ClampedArray(maxPixelValue - minPixelValue + 1);

  for (let currentPixelValue = minPixelValue; currentPixelValue <= maxPixelValue; currentPixelValue++) {

    lut[currentPixelValue + offset] = transform(currentPixelValue);
  }

  return {
    offset,
    lut,
  }
}
