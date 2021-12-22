
import {computeLimits} from "./computeLimits";

describe('compute limits', function () {

  test('simple', () => {

    const limits = computeLimits([2, 4, 2, 3, 1]);

    expect(limits.min).toEqual(1);
    expect(limits.max).toEqual(4);
  });

  test('single value', () => {

    const limits = computeLimits([10]);

    expect(limits.min).toEqual(10);
    expect(limits.max).toEqual(10);
  });

  test('negative values', () => {

    const limits = computeLimits([2, 4, -2, 3, 1]);

    expect(limits.min).toEqual(-2);
    expect(limits.max).toEqual(4);
  });

  test('no value', () => {

    expect(() => computeLimits([]))
      .toThrow();
  })
});
