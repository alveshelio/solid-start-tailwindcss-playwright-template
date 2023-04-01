module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'ignorePatterns': ['src/**/*.css'],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/recommended',
    'plugin:prettier/recommended',
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': ['./tsconfig.json'],
  },
  'plugins': [
    '@typescript-eslint',
    'solid',
    'import',
    'jsx-a11y',
    'prettier',
  ],
  'rules': {}
};
