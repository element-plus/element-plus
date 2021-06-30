/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const fs = require('fs')
const algoliasearch = require('algoliasearch')
const slugify = require('transliteration').slugify
const algoliaKey = process.env.ALGOLIA_KEY

const client = algoliasearch('7DCTSU0WBW', algoliaKey)
const langs = {
  'zh-CN': 'element-zh',
  'en-US': 'element-en',
  'es': 'element-es',
  'fr-FR': 'element-fr',
  'jp': 'element-jp',
}

const fg = require('fast-glob')

;['zh-CN', 'en-US', 'es', 'fr-FR', 'jp'].forEach(lang => {
  const indexName = langs[lang]
  const index = client.initIndex(indexName)
  index.clearObjects().then(() => {
    const files = fg.sync(`website/docs/${lang}/*.md`)
    let indices = []
    files.forEach(file => {
      const regExp = new RegExp(`website\/docs\/${lang}\/(.*).md`)
      const pathContent = file.match(regExp)
      const path = pathContent[1]
      const index = path.lastIndexOf('/')
      const names = index !== -1 ? path.split('/') : []
      const component = names.length ? names[names.length - 1] : path
      const content = fs.readFileSync(file, 'utf8')
      const matches = content
        .replace(/:::[\s\S]*?:::/g, '')
        .replace(/```[\s\S]*?```/g, '')
        .match(/#{2,4}[^#]*/g)
        .map(match =>
          match
            .replace(/\n+/g, '\n')
            .split('\n')
            .filter(part => !!part),
        )
        .map(match => {
          const length = match.length
          if (length > 2) {
            const desc = match.slice(1, length).join('')
            return [match[0], desc]
          }
          return match
        })
      let i = 0
      indices = indices.concat(
        matches.map(match => {
          const title = match[0].replace(/#{2,4}/, '').trim()
          const index = { component, title }
          index.anchor = slugify(title)
          index.content = (match[1] || title).replace(/<[^>]+>/g, '')
          index.path = path
          index.sort = i++
          return index
        }),
      )
    })

    index.saveObjects(indices, {
      autoGenerateObjectIDIfNotExist: true,
    })
  })
})
