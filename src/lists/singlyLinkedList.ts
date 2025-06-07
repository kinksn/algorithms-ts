/**
 * Singly linked list implementation with basic operations.
 * Insertion at end, deletion by value, and search.
 * Time: O(n) for insertion, deletion, and search.
 * Space: O(1)
 */

export class SinglyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null,
  ) {}
}

export class SinglyLinkedList<T> {
  head: SinglyLinkedListNode<T> | null = null;

  insert(value: T): void {
    const node = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }

  search(value: T): SinglyLinkedListNode<T> | null {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return null;
  }

  delete(value: T): boolean {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      return true;
    }
    return false;
  }
}
