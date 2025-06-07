import { SinglyLinkedList } from './singlyLinkedList';

describe('SinglyLinkedList', () => {
  test('inserts and searches values', () => {
    const list = new SinglyLinkedList<number>();
    list.insert(1);
    list.insert(2);
    expect(list.search(2)?.value).toBe(2);
  });

  test('deletes a value', () => {
    const list = new SinglyLinkedList<number>();
    list.insert(1);
    list.insert(2);
    expect(list.delete(1)).toBe(true);
    expect(list.search(1)).toBeNull();
  });
});
