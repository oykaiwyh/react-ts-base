module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'airbnb-base',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-base'],
      plugins: ['import'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['/vite.svg'],
            commonjs: true,
            amd: true,
          },
        ], // 忽略对/public/目录下资源的未解决引用警告
        'import/no-absolute-path': [
          'error',
          {
            ignore: ['/vite.svg'],
            commonjs: true,
            amd: true,
          },
        ], // 忽略对/public/目录下资源的未解决引用警告
      },
    },
  ],
};
