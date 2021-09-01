const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    // 'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'promise'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    // 取消对文件扩展名的验证
    'import/extensions': OFF,
    // 使用history/createBrowserHistory引入包时，不会报错
    'import/no-extraneous-dependencies': OFF,
    // 在只有一个导出的模块里，用 export default 更好.鼓励使用更多文件，每个文件只做一件事情并导出，这样可读性和可维护性更好。
    'import/prefer-default-export': OFF,
    // 取消自动解析路径，以此开启alias的别名路径设置
    'import/no-unresolved': OFF,
    'import/no-dynamic-require': OFF,

    // 'unicorn/better-regex': ERROR,
    // 'unicorn/prevent-abbreviations': OFF,
    // 'unicorn/filename-case': [
    //   ERROR,
    //   {
    //     cases: {
    //       // 中划线
    //       kebabCase: true,
    //       // 小驼峰
    //       camelCase: true,
    //       // 下划线
    //       snakeCase: false,
    //       // 大驼峰
    //       pascalCase: true,
    //     },
    //   },
    // ],
    // 'unicorn/no-array-instanceof': WARN,
    // 'unicorn/no-for-loop': WARN,
    // 'unicorn/prefer-add-event-listener': [
    //   ERROR,
    //   {
    //     excludedPackages: ['koa', 'sax'],
    //   },
    // ],
    // 'unicorn/prefer-query-selector': ERROR,
    // 'unicorn/no-null': OFF,
    // 'unicorn/no-array-reduce': OFF,

    // 禁止不必要的构造函数
    '@typescript-eslint/no-useless-constructor': ERROR,
    // 禁止空函数
    '@typescript-eslint/no-empty-function': WARN,
    // 禁止在 import 语句之外使用 require 语句
    '@typescript-eslint/no-var-requires': OFF,
    // 需要函数和类方法的显式返回类型
    '@typescript-eslint/explicit-function-return-type': OFF,
    // 导出函数和类的公共类方法需要显式返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    // 禁止使用any类型
    '@typescript-eslint/no-explicit-any': OFF,
    // 禁止在定义之前使用变量
    '@typescript-eslint/no-use-before-define': ERROR,
    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': WARN,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': OFF,
    // 允许的扩展集是可配置的。默认情况下允许使用“.jsx”。
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
    // 缩进样式
    'react/jsx-indent-props': [ERROR, 2],
    // jsx缩进样式
    'react/jsx-indent': [ERROR, 2],
    // 此选项将 JSX 中的每一行限制为一个表达式。
    'react/jsx-one-expression-per-line': OFF,
    'react/destructuring-assignment': OFF,
    // 此规则将强制状态初始化样式在构造函数中或具有类属性。
    'react/state-in-constructor': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/prop-types': OFF,
    // 强制一个可单击的non-interactive元素至少有一个键盘事件侦听器
    'jsx-a11y/click-events-have-key-events': OFF,
    // Non-interactive元素不应分配鼠标或键盘事件侦听器。
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    // 强制non-interactive，具有单击处理程序的可见元素（如<div>）使用role属性。
    'jsx-a11y/no-static-element-interactions': OFF,
    // 强制标签标签具有文本标签和关联的控件。将控件包装在标签标记中。添加htmlFor到标签并为其分配一个 DOM ID 字符串，指示页面上的输入。
    'jsx-a11y/label-has-associated-control': OFF,
    // 此规则通过在类成员之间强制执行来提高可读性。它不会在第一个成员之前和最后一个成员之后检查空行，因为这已经由填充块处理。
    'lines-between-class-members': [ERROR, 'always'],
    // 缩进
    indent: [ERROR, 2],
    // 此规则强制执行统一的行结尾，而不受操作系统，VCS 或整个代码库中使用的编辑器的影响。
    'linebreak-style': [ERROR, 'unix'],
    // 此规则强制一致使用反引号，双引号或单引号
    quotes: [ERROR, 'single'],
    // 此规则强制使用分号
    semi: [ERROR, 'always'],
    // 该规则旨在消除对程序状态没有影响的未使用的表达式
    'no-unused-expressions': WARN,
    // 这条规则不允许一元运算符++和--。
    'no-plusplus': OFF,
    // 此规则禁止调用console对象的方法。
    'no-console': OFF,
    // 该规则旨在标记不使用的类方法this
    'class-methods-use-this': ERROR,
    // 此规则强制在 JSX 属性中一致使用双引号或单引号
    'jsx-quotes': [ERROR, 'prefer-single'],
    // 此规则要求所有调用require()都位于模块的顶层，类似于 ES6 import和export语句，这也只能在顶层发生
    'global-require': OFF,
    // 此规则会在遇到对尚未声明的标识符的引用时发出警告。
    'no-use-before-define': OFF,
    // 此规则不允许指定（即用户定义）语法
    'no-restricted-syntax': OFF,
    // 此规则不允许continue语句。
    'no-continue': OFF,
    // 此规则不允许使用混合空格和制表符进行缩进。
    'no-mixed-spaces-and-tabs': [0],
    enforceForJSX: true,
  },
};
