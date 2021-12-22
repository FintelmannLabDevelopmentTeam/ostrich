
import {OstrichImageData} from "./OstrichImageData";
import {areEqual} from "../util";

describe('image data', () => {

  test('simple', () => {

    const imageData = new OstrichImageData(
      new Int16Array([0, 1, 2, 3, 4, 5]),
      [1, 2, 3],
    );

    expect(areEqual(imageData.data, new Int16Array([0, 1, 2, 3, 4, 5]))).toBeTruthy();
    expect(imageData.dimensions).toEqual([1, 2, 3]);
    expect(imageData.getDepth()).toEqual(1);
    expect(imageData.getHeight()).toEqual(2);
    expect(imageData.getWidth()).toEqual(3);
    expect(imageData.getLimits()).toEqual({
      min: 0,
      max: 5,
    });
  });

  test('too few dimensions', () => {

    expect(() => new OstrichImageData(new Int16Array([0, 0, 0, 0]), [1, 2]))
      .toThrow();
  });

  test('too many dimensions', () => {

    expect(() => new OstrichImageData(new Int16Array([0, 0, 0, 0]), [1, 2, 3, 4]))
      .toThrow();
  });

  test('dimensions do not match array', () => {

    expect(() => new OstrichImageData(new Int16Array([0, 0, 0, 0]), [1, 2, 3]))
      .toThrow();
  });
});
