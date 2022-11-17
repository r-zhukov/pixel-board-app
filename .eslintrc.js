module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
  ],
  rules: {
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
  },
};
