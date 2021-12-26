
import {computeInitialTransform} from "./computeInitialTransform";

describe('initial transform computation', () => {

  test('small viewport', () => {

    const transform = computeInitialTransform([5, 100, 100], 10, 10);

    expect(transform.scale).toBe(0.1);
    expect(transform.translateX).toBe(0);
    expect(transform.translateY).toBe(0);
  });

  test('large viewport', () => {

    const transform = computeInitialTransform([5, 100, 100], 1000, 1000);

    expect(transform.scale).toBe(10);
    expect(transform.translateX).toBe(0);
    expect(transform.translateY).toBe(0);
  });

  test('narrow viewport', () => {

    const transform = computeInitialTransform([5, 100, 100], 10, 1000);

    expect(transform.scale).toBe(0.1);
    expect(transform.translateX).toBe(0);
    expect(transform.translateY).toBe(495);
  });

  test('wide viewport', () => {

    const transform = computeInitialTransform([5, 100, 100], 1000, 10);

    expect(transform.scale).toBe(0.1);
    expect(transform.translateX).toBe(495);
    expect(transform.translateY).toBe(0);
  });
});
