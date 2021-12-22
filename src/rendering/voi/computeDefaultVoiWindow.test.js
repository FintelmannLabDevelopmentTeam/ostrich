
import {computeDefaultVoiWindow} from "./computeDefaultVoiWindow";
import {OstrichImageData} from "../../data";

describe('default voi window computation', () => {

  test('simple', () => {

    const imageData = new OstrichImageData(
      new Int16Array([10, 20, 30, 40]),
      [1, 2, 2],
    );
    const voiWindow = computeDefaultVoiWindow(imageData);

    expect(voiWindow.center).toBe(25);
    expect(voiWindow.width).toBe(30);
  });
});
