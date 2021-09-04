/* eslint-disable @typescript-eslint/no-var-requires */
const Config = require('markdown-it-chain')
const anchorPlugin = require('markdown-it-anchor')
const slugify = require('transliteration').slugify
const hljs = require('highlight.js')
const containers = require('./containers')
const overWriteFenceRule = require('./fence')
const applyRules = require('./rules')

const config = new Config()

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return (
      '<pre class="example-code"><code class="hljs">' +
      str +
      '</code><span class="lang-mark">' +
      getLangMark(lang) +
      '</span></pre>'
    )
  }
  const html = hljs.highlight(lang, str, true, undefined).value
  return `<pre class="example-code"><code class="hljs language-${lang}">${html}</code><span class="lang-mark">${getLangMark(
    lang
  )}</span></pre>`
}

slugify.config({
  replace: [
    ['.', '-'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['0', 'zero'],
  ],
})
config.options
  .html(true)
  .highlight(highlight)
  .end()

  .plugin('anchor')
  .use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkSymbol: '',
    },
  ])
  .end()

  .plugin('containers')
  .use(containers)
  .end()

function getLangMark(lang) {
  switch (lang.toLowerCase()) {
    case 'bash':
    case 'zsh':
    case 'shell':
      return 'sh'
    case 'javascript':
      return 'js'
    case 'typescript':
      return 'ts'
    default:
      return lang
  }
}

const md = config.toMd()
overWriteFenceRule(md)
applyRules(md)

module.exports = md
