module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier",
    "plugin:import/typescript",
  ],
  plugins: ["unused-imports"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "next.config.js",
  ],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "unused-imports/no-unused-imports": "error"
  }
}