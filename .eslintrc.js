module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'next/*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next*',
            group: 'external',
            position: 'before',
          },

          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'hooks/*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'components/*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'utils/*',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-loop-func': 'off',
  },
};
