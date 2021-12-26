
import {Transform} from "./Transform";

/**
 * @param {number[]} imageDataDimensions
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {?Transform} target
 * @return {Transform}
 */
export function computeInitialTransform(imageDataDimensions, canvasWidth, canvasHeight, target = undefined) {

  const imageDataHeight = imageDataDimensions[1];
  const imageDataWidth = imageDataDimensions[2];

  const transform = target ?? new Transform();

  transform.scale = Number.MAX_VALUE;
  transform.scale = Math.min(transform.scale, canvasHeight / imageDataHeight);
  transform.scale = Math.min(transform.scale, canvasWidth / imageDataWidth);

  transform.translateX = (canvasWidth - imageDataWidth * transform.scale) / 2;
  transform.translateY = (canvasHeight - imageDataHeight * transform.scale) / 2;

  return transform;
}
