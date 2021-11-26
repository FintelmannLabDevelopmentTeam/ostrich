
/**
 * Renders given raw data into a Uint8ClampedArray that can be used for CanvasImageData.
 *
 * @param {!Uint16Array} data
 * @param {!number[]} dimensions
 * @param {number} slice
 * @returns {Uint8ClampedArray}
 */
export function render(data, dimensions, slice) {

  const sliceDataLength = dimensions[1] * dimensions[2];

  const rgbaSliceData = new Uint8ClampedArray(sliceDataLength * 4);

  let imageDataIndex = slice * sliceDataLength;
  let canvasDataIndex = 3;
  const lastImageDataIndex = (slice + 1) * sliceDataLength;

  while (imageDataIndex < lastImageDataIndex) {
    rgbaSliceData[canvasDataIndex] = data[imageDataIndex++];
    canvasDataIndex += 4;
  }

  return rgbaSliceData;
}
