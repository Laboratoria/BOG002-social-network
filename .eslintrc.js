/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable quote-props */
/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
      firebase: "readonly",
      auth: "readonly",
        },
  rules: {
    "import/extensions": 0,
    "quotes": 0,
  },
};
