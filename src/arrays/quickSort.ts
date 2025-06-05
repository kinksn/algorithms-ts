/**
 * Sort an array using Quick Sort.
 * Time  : O(n log n) on average
 * Space : O(n)
 */

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr.slice();
  const [pivot, ...rest] = arr;
  const left: number[] = [];
  const right: number[] = [];
  for (const n of rest) {
    if (n <= pivot) left.push(n);
    else right.push(n);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
