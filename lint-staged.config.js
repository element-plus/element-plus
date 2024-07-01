// lint-staged.config.js
module.exports = {
  '*.{js,jsx,md,json}': ['eslint --cache --fix'],
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache --fix'],
  '*.vue': [() => 'vue-tsc -p tsconfig.json --noEmit', 'eslint --cache --fix'],
}
