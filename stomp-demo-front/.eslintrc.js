// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "jquery": true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [
      "warn",
      2
    ],
    //关闭额外的分号检查
    //0:关闭，1:警告，2:异常
    "semi": 0,
    //字符串必须使用单引号
    "quotes": [
      "error",
      "single"
    ]
  }
}
