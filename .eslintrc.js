module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env:{
    browser:true
  },
  extends: 'eslint:recommended',
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
    'valid-jsdoc': 1,
    'no-implied-eval': 1,
    'no-loop-func': 1,
    'vars-on-top': 0,
    'no-use-before-define': 0,
    'indent': 1,
    'new-cap': 1,
    'new-parens': 1,
    'no-mixed-spaces-and-tabs': 1,
    'require-jsdoc': 1,
    'semi': 1,
    'no-console':0,
    'no-unused-vars':0
  }
}
