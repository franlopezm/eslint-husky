module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jsonc/recommended-with-json',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'max-params': ['error', 3],
    'jsonc/array-element-newline': ['error', 'always'],
    'jsonc/array-bracket-newline': ['error', {
      multiline: true,
      minItems: 1,
    }],
    'jsonc/indent': ['error', 2, {}],
    'jsonc/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'jsonc/object-curly-newline': ['error', 'always'],
    'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
  },
}
