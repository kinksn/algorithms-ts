import { heapSort } from './heapSort';

describe('heapSort', () => {
  test('sorts an array', () => {
    expect(heapSort([4, 1, 3, 2])).toEqual([1, 2, 3, 4]);
  });

  test('handles empty array', () => {
    expect(heapSort([])).toEqual([]);
  });
});
