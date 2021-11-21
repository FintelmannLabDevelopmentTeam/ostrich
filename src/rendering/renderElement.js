
import {getImageInfo} from "../imageInfo";
import {render} from "./render";

export function renderElement(canvasElement) {

  const imageInfo = getImageInfo(canvasElement);
  const renderedImageData = render(imageInfo.data, imageInfo.dimensions, imageInfo.slice);

  // todo: embedding app should keep control over canvas size
  canvasElement.width = imageInfo.dimensions[1];
  canvasElement.height = imageInfo.dimensions[2];

  const ctx = canvasElement.getContext('2d', {

    // see: https://developers.google.com/web/updates/2019/05/desynchronized
    desynchronized: true,
    preserveDrawingBuffer: true,

  });

  const canvasImageData = ctx.createImageData(imageInfo.dimensions[1], imageInfo.dimensions[2]);
  canvasImageData.data.set(renderedImageData);

  ctx.putImageData(canvasImageData, 0, 0);
}
