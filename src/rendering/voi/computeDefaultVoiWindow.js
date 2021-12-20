
import {VoiWindow} from "./VoiWindow";

/**
 * @param {OstrichImageData} imageData
 * @returns {VoiWindow}
 */
export function computeDefaultVoiWindow(imageData) {

  const limits = imageData.getLimits();

  const center = (limits.min + limits.max) / 2;
  const width = limits.max - limits.min;

  return new VoiWindow(center, width);
}
