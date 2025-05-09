import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // expect(), describe() をグローバルで
    environment: 'node', // DOM が不要なら node
    include: ['./src/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['**/node_modules/**'],
    },
  },
});
