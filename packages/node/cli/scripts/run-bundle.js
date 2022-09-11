if (process.env.EP_BUILD === 'bundle') {
  import('../dist/index.js')
} else {
  import('@element-plus/cli-published')
}
