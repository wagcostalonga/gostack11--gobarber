module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-useless-constructor': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '_'
    }],
    '@typescript-eslint/interface-name-prefix': ['error', {'prefixWithI': 'always'}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never'
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
};
