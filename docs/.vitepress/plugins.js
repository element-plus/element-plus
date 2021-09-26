const path = require('path')
const fs = require('fs')
const { parse } = require('@vue/compiler-sfc')
const localMd = require('markdown-it')()
const mdContainer = require('markdown-it-container')
const { highlight } = require('vitepress/dist/node/markdown/plugins/highlight')

const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/

module.exports = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const data = md.__data
      const hoistedTags = data.hoistedTags || (data.hoistedTags = [])

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''

        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children[0].content
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, '../examples', `${sourceFile}.vue`),
            'utf-8'
          )

          const existingScriptIndex = hoistedTags.findIndex((tag) => {
            return scriptSetupRE.test(tag)
          })

          if (existingScriptIndex === -1) {
            hoistedTags.push(`
<script setup>
const demos = import.meta.globEager('../../examples/${
              sourceFile.split('/')[0]
            }/*.vue')
</script>
            `)
          }
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        const { html, js, css, cssPreProcessor, jsPreProcessor } =
          generateCodePenSnippet(source)
        return `<Demo :demos="demos" source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" html="${html}" js="${js}" css="${css}" css-pre-processor="${cssPreProcessor}" js-pre-processor="${jsPreProcessor}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      }

      return '</Demo>'
    },
  })
}

function generateCodePenSnippet(source) {
  const { template, script, styles } = parse(source).descriptor
  const css = (styles || [{ content: '' }]).pop()
  return {
    html: encodeURIComponent(template.content),
    js: encodeURIComponent((script || { content: '' }).content),
    css: encodeURIComponent(css?.content || ''),
    cssPreProcessor: css?.lang || 'none',
    jsPreProcessor: script?.lang || 'none',
  }
}
