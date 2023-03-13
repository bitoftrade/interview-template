module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
	  project: 'tsconfig.json',
	  sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-react'],
  rules: {
      'additional-rule': 'warn'
  },
  extends: [
	  'react-app',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:prettier/recommended',
  ],
  root: true,
  env: {
	  node: true,
	  jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
	  '@typescript-eslint/explicit-function-return-type': 'warn',
	  '@typescript-eslint/explicit-module-boundary-types': 'warn',
	  '@typescript-eslint/no-explicit-any': 'warn',
	  'prettier/prettier': ['error', {}, { usePrettierrc: true }],
	  'class-methods-use-this': 'warn',
	  'no-param-reassign': 'warn',
	  'spaced-comment': 'warn',
	  'import/prefer-default-export': 'warn',
	  'no-multiple-empty-lines': 'warn',
	  'import/no-cycle': 'warn',
	  'import/extensions': 'warn',
	  'max-classes-per-file': 'warn',
	  'lines-between-class-members': 'warn',
	  'prefer-template': 'warn',
	  'react/jsx-indent': [2, 2],
	  'react/jsx-indent-props': [2, 2],
	  'jsx-a11y/click-events-have-key-events': 'warn',
	  'jsx-a11y/no-noninteractive-element-interactions': 'warn',
	  'react/jsx-first-prop-new-line': [2, 'multiline'],
	  'react/jsx-max-props-per-line': [1, { 'when': 'multiline' }],
	  'react/jsx-one-expression-per-line': 'off',
	  'import/no-absolute-path': 'warn',
	  'import/no-unresolved': 'warn',
	  'keyword-spacing': ['error', { before: true, after: true }]
  }
};

