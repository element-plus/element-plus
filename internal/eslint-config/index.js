import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

console.log(ts.configs.eslintRecommended.rules)


export default defineConfig([
    {
        files: ['**/*.js'],
        extends: [js.configs.recommended],
        // Enabled checkJs in TypeScript config, so apply this ruleset for JavaScript files as well.
        rules: ts.configs.eslintRecommended.rules
    },
    {
        files: ['internal/**/*.ts'],
        extends: [ts.configs.recommended],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        }
    }
])

