
import {changeVoiWindow} from "../interface";
import {DraggingTool} from "./DraggingTool";
import {getElementImageContext} from "../context";

export class VoiWindowDraggingTool extends DraggingTool {

  constructor(mouseButton = 0) {

    super(mouseButton);
  }

  _drag(event, diffX, diffY) {

    const imageContext = getElementImageContext(event.target);

    const newWindowCenter = imageContext.voiWindow.center + diffX;
    const newWindowWidth = imageContext.voiWindow.width + diffY;

    changeVoiWindow(event.target, newWindowCenter, newWindowWidth);
  }
}
