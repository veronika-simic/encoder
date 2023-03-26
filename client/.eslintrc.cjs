module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.html', '*.blade.php'],
      parser: '@angular-eslint/template-parser',
    },
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.html'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {},
};
