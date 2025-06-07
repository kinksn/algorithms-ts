/**
 * Breadth-first search traversal for a binary tree.
 * Time: O(n)
 * Space: O(n)
 */

export interface TreeNode<T> {
  value: T;
  left?: TreeNode<T> | null;
  right?: TreeNode<T> | null;
}

export function bfsTree<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = [];
  if (!root) return result;
  const queue: (TreeNode<T>)[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
