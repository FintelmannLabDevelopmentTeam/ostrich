
import {VoiWindow} from "./VoiWindow";
import {getLinearVoiTransform} from "./getLinearVoiTransform";
import {OstrichImageData} from "../../data";
import {getVoiLut} from "./getVoiLut";
import {areEqual} from "../../util";

describe('voi lut generation', () => {

  const voiWindow = new VoiWindow(20, 10);
  const transform = getLinearVoiTransform(voiWindow, 100);
  const imageData = new OstrichImageData(
    new Int16Array([10, 11, 15, 20]),
    [1, 2, 2],
  );

  const lut = getVoiLut(imageData, transform);

  test('lut', () => {

    const target = new Uint8ClampedArray(
      [0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50]
    );

    expect(areEqual(lut.lut, target)).toBeTruthy();
  });

  test('shift', () => {

    expect(lut.shift).toBe(-10);
  })

  test('lookup', () => {

    expect(lut.lookup(10)).toBe(0);
    expect(lut.lookup(20)).toBe(50);
  });
});
