import { DoublyLinkedList } from './doublyLinkedList';

describe('DoublyLinkedList', () => {
  test('inserts and searches values', () => {
    const list = new DoublyLinkedList<number>();
    list.insert(1);
    list.insert(2);
    expect(list.search(1)?.value).toBe(1);
  });

  test('deletes a value', () => {
    const list = new DoublyLinkedList<number>();
    list.insert(1);
    list.insert(2);
    expect(list.delete(2)).toBe(true);
    expect(list.search(2)).toBeNull();
  });
});
