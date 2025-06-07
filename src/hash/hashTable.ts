/**
 * Basic hash table using JavaScript object for storage.
 * Provides constant time set and get on average.
 * Time: O(1) average for set and get.
 * Space: O(n)
 */

export class HashTable<V> {
  private data: Record<string, V> = {};

  set(key: string, value: V): void {
    this.data[key] = value;
  }

  get(key: string): V | undefined {
    return this.data[key];
  }
}
