/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 * */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'prettier',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // We need to be able to import devDependencies
    'import/no-extraneous-dependencies': ['error', { optionalDependencies: false, peerDependencies: false }],

    // Prevents from writing functions that are too complex (in terms of cyclomatic complexity).
    complexity: [2, 10],

    // Disabled as we're using simple-import-sort plugin.
    'sort-imports': 0,

    // Use only internal Next Links
    'jsx-a11y/anchor-is-valid': 'off',

    // In many cases TS infers return type of a function so we don't need to provide it explicitly.
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // Enforces some naming conventions across the codebase.
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        leadingUnderscore: 'allow',
        format: null,
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'typeLike', format: ['PascalCase'] },

      // Interfaces shouldn't be prefixed with `I`.
      { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },

      // Types shouldn't be prefixed with `T`.
      { selector: 'typeAlias', format: ['PascalCase'], custom: { regex: '^T[A-Z]', match: false } },

      // Generics should have meaningful names instead of one-letters.
      { selector: 'typeParameter', format: ['PascalCase'], custom: { regex: '[a-zA-Z]{2,}', match: true } },
    ],

    // Disabled as we're using simple-import-sort plugin.
    'import/order': 0,

    // To make imports better searchable we always use named exports.
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,

    // Automatically sorts imports to ensure their consistency.
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'], // Side effects.
          ['^[^.]'], // Absolute imports.
          ['^\\.'], // Relative imports.
        ],
      },
    ],

    'react/button-has-type': 'off',
  },
  overrides: [
    {
      // Files with React components.
      files: ['*.tsx'],
      rules: {
        // Ensures we provide a key when rendering components in iteration.
        'react/jsx-key': 2,

        // There is no need for prop types as we use TypeScript.
        'react/prop-types': 0,

        // We see no reason to prevent props spreading in react components.
        'react/jsx-props-no-spreading': 0,

        // As the project uses JSX transform, there is no need for importing React explicitly.
        'react/react-in-jsx-scope': 0,

        // To be consistent we want to always use arrow function when creating components.
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],

        // In many cases undefined is considered a valid value for a prop.
        'react/require-default-props': 0,
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: ['tsconfig.eslint.json'],
      },
    },
  },
};
