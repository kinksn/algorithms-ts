/**
 * Depth-first search for graphs represented as adjacency lists.
 * Time: O(V + E)
 * Space: O(V)
 */

export function dfsGraph(graph: Map<number, number[]>, start: number): number[] {
  const visited = new Set<number>();
  const result: number[] = [];

  function dfs(node: number): void {
    visited.add(node);
    result.push(node);
    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);
  return result;
}
