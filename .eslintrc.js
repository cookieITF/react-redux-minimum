module.exports = {
  env: {
    es6: true,
    node: true,
    browser:true
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { "args": "none" }],
    "react/prop-types": [0]
  }
};
