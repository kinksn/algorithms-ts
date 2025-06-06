import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  test('finds existing element', () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
  });

  test('returns -1 when element not present', () => {
    expect(binarySearch([1, 3, 5, 7], 4)).toBe(-1);
  });

  test('handles empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
