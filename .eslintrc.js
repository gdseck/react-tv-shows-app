module.exports = {
  root: true,
  extends: 'babel',
  parserOptions: {
    exmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    'no-var': 0,
    'max-len': 0
  },
  env: {
    node: true,
    mocha: true
  }
}
