module.exports = {
  root: true,
  env: { node: true, es2023: true, vitest: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "import/order": ["error", { "newlines-between": "always" }],
  },
};
