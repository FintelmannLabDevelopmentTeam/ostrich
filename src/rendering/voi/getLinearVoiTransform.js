
import {assert} from "chai";

import {VoiWindow} from "./VoiWindow";

/**
 * @param {VoiWindow} voiWindow
 * @param {number} limit
 * @returns {function(number):number}
 */
export function getLinearVoiTransform(voiWindow, limit) {

  assert.instanceOf(voiWindow, VoiWindow);
  assert.isNumber(limit);
  assert.isAbove(limit, 0);

  return value => {

    const transformed = ((value - voiWindow.center) / voiWindow.width) * limit;

    if (transformed < 0) {
      return 0;
    } else if (transformed > limit) {
      return limit;
    } else {
      return transformed;
    }
  };
}
