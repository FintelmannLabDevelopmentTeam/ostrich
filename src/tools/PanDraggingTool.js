
import {DraggingTool} from "./DraggingTool";
import {getElementImageContext} from "../context";
import {changeTransform} from "../interface";

export class PanDraggingTool extends DraggingTool {

  constructor(mouseButton = 1) {

    super(mouseButton);
  }

  _drag(event, diffX, diffY) {

    const imageContext = getElementImageContext(event.target);

    changeTransform(
      event.target,
      null,
      imageContext.transform.translateX + diffX,
      imageContext.transform.translateY + diffY,
    );
  }
}
