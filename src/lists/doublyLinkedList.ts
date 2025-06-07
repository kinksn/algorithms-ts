/**
 * Doubly linked list implementation with basic operations.
 * Insertion at end, deletion by value, and search.
 * Time: O(n) for insertion, deletion, and search.
 * Space: O(1)
 */

export class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public prev: DoublyLinkedListNode<T> | null = null,
    public next: DoublyLinkedListNode<T> | null = null,
  ) {}
}

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null = null;

  insert(value: T): void {
    const node = new DoublyLinkedListNode(value, this.tail, null);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
  }

  search(value: T): DoublyLinkedListNode<T> | null {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return null;
  }

  delete(value: T): boolean {
    let curr = this.head;
    while (curr && curr.value !== value) {
      curr = curr.next;
    }
    if (!curr) return false;
    if (curr.prev) curr.prev.next = curr.next; else this.head = curr.next;
    if (curr.next) curr.next.prev = curr.prev; else this.tail = curr.prev;
    return true;
  }
}
