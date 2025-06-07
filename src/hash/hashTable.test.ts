import { HashTable } from './hashTable';

describe('HashTable', () => {
  test('sets and gets values', () => {
    const ht = new HashTable<number>();
    ht.set('a', 1);
    expect(ht.get('a')).toBe(1);
  });

  test('returns undefined for missing key', () => {
    const ht = new HashTable<number>();
    expect(ht.get('x')).toBeUndefined();
  });
});
