
/**
 * @param {HTMLCanvasElement} sourceCanvas
 * @param {CanvasRenderingContext2D} targetCanvasContext
 * @param {Transform} transform
 */
export function applyTransform(sourceCanvas, targetCanvasContext, transform) {

  // @see: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  targetCanvasContext.drawImage(
    sourceCanvas,
    0, 0, // sx, sy
    sourceCanvas.width, sourceCanvas.height, // sWidth, sHeight
    transform.translateX, transform.translateY, // dx, dy
    sourceCanvas.width * transform.scale, sourceCanvas.height * transform.scale // dWidth, dHeight
  );
}
