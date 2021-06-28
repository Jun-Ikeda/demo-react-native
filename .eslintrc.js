module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'import/extensions': 'off', // suspended
    'import/no-unresolved': 'off', // suspended

    'linebreak-style': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '[pP]rops', varsIgnorePattern: 'styles' }], // suspended
    'max-len': ['error', {
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
  },
};
