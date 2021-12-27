
import {viewportToImageCoordinates} from "./coordinatesTranslation";
import {getMockData} from "../data";
import {Transform} from "../rendering/transform";

describe('coordinates translation', function () {

  test('neutral transform', () => {

    const imageData = getMockData([10, 10, 10]);
    const transform = new Transform(1, 0, 0);

    expect(viewportToImageCoordinates(imageData, transform, 0, 0)).toEqual({x: 0, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 9, 9)).toEqual({x: 9, y: 9});
    expect(viewportToImageCoordinates(imageData, transform, 10, 10)).toBeNull();
    expect(viewportToImageCoordinates(imageData, transform, 5, 0)).toEqual({x: 5, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 0, 5)).toEqual({x: 0, y: 5});
  });

  test('enlarged', () => {

    const imageData = getMockData([10, 10, 10]);
    const transform = new Transform(10, 0, 0);

    expect(viewportToImageCoordinates(imageData, transform, 0, 0)).toEqual({x: 0, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 10, 10)).toEqual({x: 1, y: 1});
    expect(viewportToImageCoordinates(imageData, transform, 5, 0)).toEqual({x: 0.5, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 0, 5)).toEqual({x: 0, y: 0.5});
    expect(viewportToImageCoordinates(imageData, transform, 99, 99)).toEqual({x: 9.9, y: 9.9});
    expect(viewportToImageCoordinates(imageData, transform, 100, 100)).toBeNull();
  });

  test('reduced', () => {

    const imageData = getMockData([10, 10, 10]);
    const transform = new Transform(0.1, 0, 0);

    expect(viewportToImageCoordinates(imageData, transform, 0, 0)).toEqual({x: 0, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 0.9, 0.9)).toEqual({x: 9, y: 9});
    expect(viewportToImageCoordinates(imageData, transform, 1, 1)).toBeNull();
    expect(viewportToImageCoordinates(imageData, transform, 10, 10)).toBeNull();
    expect(viewportToImageCoordinates(imageData, transform, 0.5, 0)).toEqual({x: 5, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 0, 0.5)).toEqual({x: 0, y: 5});
  });

  test('translated', () => {

    const imageData = getMockData([10, 10, 10]);
    const transform = new Transform(1, 5, 4);

    expect(viewportToImageCoordinates(imageData, transform, 0, 0)).toBeNull();
    expect(viewportToImageCoordinates(imageData, transform, 5, 4)).toEqual({x: 0, y: 0});
    expect(viewportToImageCoordinates(imageData, transform, 10, 10)).toEqual({x: 5, y: 6});
    expect(viewportToImageCoordinates(imageData, transform, 5, 0)).toBeNull();
    expect(viewportToImageCoordinates(imageData, transform, 0, 4)).toBeNull();
  });
});
