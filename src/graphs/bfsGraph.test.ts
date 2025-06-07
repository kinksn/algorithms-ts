import { bfsGraph } from './bfsGraph';

describe('bfsGraph', () => {
  test('traverses graph in BFS order', () => {
    const graph = new Map<number, number[]>([
      [1, [2, 3]],
      [2, [4]],
      [3, []],
      [4, []],
    ]);
    expect(bfsGraph(graph, 1)).toEqual([1, 2, 3, 4]);
  });
});
