/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

import fs from 'fs'
import algoliasearch from 'algoliasearch'
import { slugify } from 'transliteration'
import fg from 'fast-glob'

interface Index {
  component: string
  title: string
  anchor: string
  content: string
  sort: number
  path: string
}

const algoliaKey = process.env.ALGOLIA_KEY!

const client = algoliasearch('7DCTSU0WBW', algoliaKey)
const langs = {
  'zh-CN': 'element-zh',
  'en-US': 'element-en',
  es: 'element-es',
  'fr-FR': 'element-fr',
  jp: 'element-jp',
}
;['zh-CN', 'en-US', 'es', 'fr-FR', 'jp'].forEach((lang) => {
  const indexName = langs[lang]
  const index = client.initIndex(indexName)
  index.clearObjects().then(() => {
    const files = fg.sync(`website/docs/${lang}/*.md`)
    let indices: Index[] = []
    files.forEach((file) => {
      const regExp = new RegExp(`website\/docs\/${lang}\/(.*).md`)
      const pathContent = file.match(regExp)!
      const path = pathContent[1]
      const index = path.lastIndexOf('/')
      const names = index !== -1 ? path.split('/') : []
      const component = names.length ? names[names.length - 1] : path
      const content = fs.readFileSync(file, 'utf8')
      const matches = content
        .replace(/:::[\s\S]*?:::/g, '')
        .replace(/```[\s\S]*?```/g, '')
        .match(/#{2,4}[^#]*/g)!
        .map((match) =>
          match
            .replace(/\n+/g, '\n')
            .split('\n')
            .filter((part) => !!part)
        )
      })

      index
        .saveObjects(indices, {
          autoGenerateObjectIDIfNotExist: true,
        })
        .catch((e) => {
          console.log(e)
        })
    })
    .catch((e) => {
      console.log(e)
    })
})
