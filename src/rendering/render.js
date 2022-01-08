
import {getLinearVoiTransform, getVoiLut} from "./voi";
import {copyToCanvasImageData} from "./canvas";
import {applyTransform} from "./transform";

/**
 * Renders the image by its given context into its associated canvas element.
 *
 * @param {ImageContext} imageContext
 */
export function render(imageContext) {

  // prepare color LUT
  const voiTransform = getLinearVoiTransform(imageContext.voiWindow, 255);
  const lut = getVoiLut(imageContext.imageData, voiTransform);

  // prepare intermediate canvas
  const {
    intermediateCanvas,
    intermediateCanvasContext,
    intermediateImageData,
  } = createIntermediateCanvas(imageContext.imageData.dimensions[2], imageContext.imageData.dimensions[1]);

  // render intermediate canvas with color LUR
  copyToCanvasImageData(imageContext.imageData, imageContext.slice, intermediateImageData, lut);
  intermediateCanvasContext.putImageData(intermediateImageData, 0, 0);

  // draw intermediate rendering with transformation into final target canvas
  imageContext.canvasContext.imageSmoothingEnabled = false; // do not smooth out image when zooming in (see: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  imageContext.canvasContext.clearRect(0, 0, imageContext.canvasContext.canvas.width, imageContext.canvasContext.canvas.height);
  applyTransform(intermediateCanvas, imageContext.canvasContext, imageContext.transform);
}

/**
 * @param {number} width
 * @param {number} height
 * @return {{intermediateCanvas: HTMLCanvasElement, intermediateCanvasContext: CanvasRenderingContext2D, intermediateImageData: ImageData}}
 */
function createIntermediateCanvas(width, height) {

  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;

  const canvasContext = canvas.getContext('2d');
  const canvasImageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);

  return {
    intermediateCanvas: canvas,
    intermediateCanvasContext: canvasContext,
    intermediateImageData: canvasImageData,
  }
}
