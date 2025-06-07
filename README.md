![CI](https://github.com/kinksn/algorithms-ts/actions/workflows/ci.yml/badge.svg)

# algorithms-ts

A collection of basic algorithms implemented in TypeScript.

## Setup

Install dependencies with **pnpm** and run the test suite:

```bash
pnpm install
pnpm exec vitest run
```

## Available algorithms

- `mergeSorted(a, b)` – merge two sorted arrays.
- `quickSort(arr)` – sort an array using Quick Sort.
- `binarySearch(arr, target)` – search for a number in a sorted array.
- `heapSort(arr)` – sort an array using Heap Sort.
- `SinglyLinkedList` – linked list with insert, delete and search.
- `DoublyLinkedList` – doubly linked list with insert, delete and search.
- `HashTable` – hash table with `set` and `get`.
- `bfsTree(root)` – breadth-first search for binary trees.
- `bfsGraph(graph, start)` – breadth-first search for graphs.
- `dfsGraph(graph, start)` – depth-first search for graphs.

These functions are exported from `src/index.ts` so you can import them from the package root.
