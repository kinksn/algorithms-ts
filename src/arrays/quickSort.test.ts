import { quickSort } from './quickSort';

describe('quickSort', () => {
  test('sorts an unsorted array', () => {
    expect(quickSort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
  });

  test('handles empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  test('returns sorted array for already sorted input', () => {
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
