
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
