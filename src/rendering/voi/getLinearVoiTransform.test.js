
import {VoiWindow} from "./VoiWindow";
import {getLinearVoiTransform} from "./getLinearVoiTransform";

describe('transform', () => {

  const voiWindow = new VoiWindow(20, 10);
  const transform = getLinearVoiTransform(voiWindow, 100);

  test.each([
    [-1, 0],
    [0, 0],
    [14, 0],
    [15, 0],
    [17.5, 25],
    [20, 50],
    [22.5, 75],
    [25, 100],
    [26, 100],
    [1000, 100],
  ])("%p => %p", (value, expectedResult) => {
    expect(transform(value)).toBe(expectedResult);
  });
});
