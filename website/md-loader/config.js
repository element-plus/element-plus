/* eslint-disable @typescript-eslint/no-var-requires */
const Config = require('markdown-it-chain')
const anchorPlugin = require('markdown-it-anchor')
const slugify = require('transliteration').slugify
const hljs = require('highlight.js')
const containers = require('./containers')
const overWriteFenceRule = require('./fence')

const config = new Config()

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return '<pre><code class="hljs">' + str + '</code></pre>'
  }
  const html = hljs.highlight(lang, str, true, undefined).value
  return `<pre><code class="hljs language-${lang}">${html}</code></pre>`
}

config
  .options.html(true).highlight(highlight).end()

  .plugin('anchor').use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true,
    },
  ]).end()

  .plugin('containers').use(containers).end()

const md = config.toMd()
overWriteFenceRule(md)

module.exports = md
