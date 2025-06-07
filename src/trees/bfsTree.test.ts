import { bfsTree, TreeNode } from './bfsTree';

describe('bfsTree', () => {
  test('traverses tree in BFS order', () => {
    const root: TreeNode<number> = {
      value: 1,
      left: { value: 2 },
      right: { value: 3 },
    };
    expect(bfsTree(root)).toEqual([1, 2, 3]);
  });

  test('handles empty tree', () => {
    expect(bfsTree<number>(null)).toEqual([]);
  });
});
