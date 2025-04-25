import { mergeSorted } from './mergeSorted';

test('merge two sorted arrays', () => {
  expect(mergeSorted([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
