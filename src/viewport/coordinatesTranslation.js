
/**
 * @param {OstrichImageData} imageData
 * @param {Transform} transform
 * @param {number} x
 * @param {number} y
 * @return {?{x: number, y: number}}
 */
export function viewportToImageCoordinates(imageData, transform, x, y) {

  const result = {
    x: (x - transform.translateX) / transform.scale,
    y: (y - transform.translateY) / transform.scale,
  };

  if (result.x >= 0 && result.x < imageData.getWidth() && result.y >= 0 && result.y < imageData.getHeight()) {
    return result;
  }

  // result is outside image
  return null;
}
