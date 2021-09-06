/* eslint-disable @typescript-eslint/no-var-requires */
const mdContainer = require('markdown-it-container')
const path = require('path')
const fs = require('fs')
const { highlight } = require('vitepress/dist/node/markdown/plugins/highlight')

module.exports = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      console.log(m)
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''

        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children[0].content
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, '../examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<Demo source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}">
        ${description ? `` : ''}
        <!--element-demo: ${content}:element-demo-->
        `
      }

      return '</Demo>'
    },
  })
}
