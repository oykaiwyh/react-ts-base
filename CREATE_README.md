# Create Project

## Expanding the ESLint configuration

### replace extends

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or

### add extends

添加阿里规范集

```js
extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended-type-checked',
  'plugin:react-hooks/recommended',
  'airbnb-base',
],
```

修改规则及绝阿里规范导致 vite 内置的 public 引入问题

- 安装 eslint-plugin-import 插件 修改规则

```shell
$ npm i eslint-plugin-import -D
```

- 修改配置

```js
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
```

## 配置 prettier 解决和 eslint 的规则冲突

### .prettierrc

```js
{
  "singleQuote": true,
  "jsxSingleQuote": false,
  "trailingComma": "all"
}
```

### .prettierignore

```
dist/
.gitignore
.npmignore
.prettierignore
.DS_Store
```
