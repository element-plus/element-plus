const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
})
