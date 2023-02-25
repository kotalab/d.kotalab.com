module.exports = {
  plugins: ["unused-imports"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "comma-dangle": [1, "always-multiline"],
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          { pattern: "@/lib/**", group: "internal", position: "before" },
          { pattern: "@/components/**", group: "internal", position: "before" },
          { pattern: "@/interfaces/**", group: "internal", position: "before" },
          { pattern: "./**.module.css", group: "index", position: "before" },
        ],
      },
    ],
    "import/extensions": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
      },
    ],
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
  },
};
