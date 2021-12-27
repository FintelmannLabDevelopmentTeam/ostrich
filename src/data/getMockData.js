
import {OstrichImageData} from "./OstrichImageData";

/**
 * @param {number[]} dimensions
 * @return {OstrichImageData}
 */
export function getMockData(dimensions) {

  const data = new Int16Array(dimensions[0] * dimensions[1] * dimensions[2]);

  return new OstrichImageData(data, dimensions);
}
