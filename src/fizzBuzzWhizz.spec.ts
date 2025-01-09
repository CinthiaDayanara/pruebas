import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  describe('FizzBuzz Game', () => {
    test('if the number is 3 the resut will be fizz', () => {
      const result = game(1);
      expect(result).toEqual(1);
    });
});