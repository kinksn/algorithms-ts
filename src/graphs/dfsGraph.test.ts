import { dfsGraph } from './dfsGraph';

describe('dfsGraph', () => {
  test('traverses graph in DFS order', () => {
    const graph = new Map<number, number[]>([
      [1, [2, 3]],
      [2, [4]],
      [3, []],
      [4, []],
    ]);
    expect(dfsGraph(graph, 1)).toEqual([1, 2, 4, 3]);
  });
});
