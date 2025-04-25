/**
 * Merge two already-sorted arrays.
 * Time  : O(n + m)
 * Space : O(n + m)
 */
export function mergeSorted(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] < b[j] ? a[i++] : b[j++]);
  }
  return result.concat(a.slice(i)).concat(b.slice(j));
}
