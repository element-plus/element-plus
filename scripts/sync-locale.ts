import { readFileSync, writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import glob from 'fast-glob'
import consola from 'consola'
import { isArray, isObject, isString } from 'lodash-unified'
import { localeRoot, normalizePath } from '@element-plus/build-utils'

interface LocaleObject {
  [key: string]: LocaleObject | string | Array<string>
}

const langRoot = resolve(localeRoot, 'lang')
const enFile = normalizePath(resolve(langRoot, 'en.ts'))
const localePath = normalizePath(resolve(`${langRoot}/!(en).ts`))
const commentInfo = '// to be translated'

function parseLocaleFile(content: string): LocaleObject {
  try {
    const untranslatedRexExp = new RegExp(
      `\\w+:(\\s+|\\n\\s+).*,?\\s*${commentInfo}$`,
      'gm'
    )
    const objectContent = content
      .replace(/^export\s+default\s+/, '')
      .replace(/;\s*$/, '')
      .replaceAll(untranslatedRexExp, '')

    return new Function(`return ${objectContent}`)()
  } catch (error) {
    consola.error('Failed to parse locale file:', error)
    return {}
  }
}

function mergeLocaleObjects(
  source: LocaleObject,
  target: LocaleObject,
  path = ''
): LocaleObject {
  const result: LocaleObject = {}

  Object.entries(source).forEach(([key, value]) => {
    const currentPath = path ? `${path}.${key}` : key

    if (isArray(value)) {
      if (isArray(target[key])) {
        result[key] = mergeLocaleArrays(
          value as Array<string>,
          target[key] as Array<string>,
          currentPath
        )
      } else {
        result[key] = value.map((item, index) => {
          consola.log(`📝 Added new array: ${currentPath}[${index}]`)
          return `${item} ${commentInfo}`
        })
      }
    } else if (isObject(value)) {
      if (isObject(target[key]) && !isArray(target[key])) {
        result[key] = mergeLocaleObjects(
          value as LocaleObject,
          target[key] as LocaleObject,
          currentPath
        )
      } else {
        result[key] = addTranslationComments(value)
      }
    } else if (key in target) {
      result[key] = target[key]
    } else if (isString(value)) {
      result[key] = `${value} ${commentInfo}`
      consola.log(`📝 Added new field: ${currentPath}`)
    }
  })

  Object.entries(target).forEach(([key, value]) => {
    if (!(key in source)) {
      result[key] = value
      consola.warn(
        `Found extra field in target: ${path ? `${path}.${key}` : key}`
      )
    }
  })

  return result
}

function mergeLocaleArrays(
  sourceArray: Array<string>,
  targetArray: Array<string>,
  path: string
): Array<string> {
  const result: Array<string> = []

  sourceArray.forEach((sourceItem, index) => {
    if (index < targetArray.length) {
      result[index] = targetArray[index]
    } else {
      result[index] = `${sourceItem} ${commentInfo}`
      consola.log(`📝 Added new array item: ${path}[${index}]`)
    }
  })

  if (targetArray.length > sourceArray.length) {
    for (let i = sourceArray.length; i < targetArray.length; i++) {
      result[i] = targetArray[i]
      consola.warn(`Found extra array item in target: ${path}[${i}]`)
    }
  }

  return result
}

function addTranslationComments(obj: LocaleObject): LocaleObject {
  return Object.entries(obj).reduce((all, [key, value]) => {
    if (isArray(value)) {
      all[key] = value.map((item) => `${item} ${commentInfo}`)
    } else if (isObject(value)) {
      all[key] = addTranslationComments(value)
    } else if (isString(value)) {
      all[key] = `${value} ${commentInfo}`
    }

    return all
  }, {} as LocaleObject)
}

function objectToTypescript(obj: LocaleObject, indent = 0): string {
  const spaces = '  '.repeat(indent)
  const items: string[] = []

  Object.entries(obj).forEach(([key, value]) => {
    if (isArray(value)) {
      let needComment = false
      const arrayItems = value.map((item) => {
        if (item.includes(commentInfo)) {
          const [actualValue] = item.split(commentInfo)
          const escapedValue = actualValue.trim().replace(/'/g, "\\'")

          needComment = true
          return `'${escapedValue}'`
        } else {
          const escapedValue = item.replace(/'/g, "\\'")
          return `'${escapedValue}'`
        }
      })

      items.push(
        `${spaces}  ${key}: [${arrayItems.join(', ')}],${
          needComment ? ` ${commentInfo}` : ''
        }`
      )
    } else if (isObject(value)) {
      items.push(
        `${spaces}  ${key}: {\n${objectToTypescript(
          value as LocaleObject,
          indent + 1
        )}\n${spaces}  },`
      )
    } else if (isString(value)) {
      if (value.includes(commentInfo)) {
        const [actualValue] = value.split(commentInfo)
        const escapedValue = actualValue.trim().replace(/'/g, "\\'")
        items.push(`${spaces}  ${key}: '${escapedValue}', ${commentInfo}`)
      } else {
        const escapedValue = value.replace(/'/g, "\\'")
        items.push(`${spaces}  ${key}: '${escapedValue}',`)
      }
    }
  })

  return items.join('\n')
}

function generateTypescriptFile(obj: LocaleObject): string {
  return `export default {\n${objectToTypescript(obj)}\n}\n`
}

function countKeys(obj: LocaleObject): number {
  return Object.values(obj).reduce((all, value) => {
    if (isObject(value) && !isArray(value)) {
      all += countKeys(value)
    } else {
      all++
    }

    return all
  }, 0)
}

function main() {
  consola.start('Starting English additions synchronization...')

  const enContent = readFileSync(enFile, 'utf-8')
  const enObject = parseLocaleFile(enContent)
  const localeFiles = glob.sync(localePath)
  let totalUpdated = 0
  let totalAdded = 0

  consola.info(`Found ${localeFiles.length} locale files to process`)

  localeFiles.forEach((filePath) => {
    const fileName = basename(filePath)

    consola.start(`Processing ${fileName}...`)

    try {
      const content = readFileSync(filePath, 'utf-8')
      const targetObject = parseLocaleFile(content)
      const originalKeys = countKeys(targetObject.el as LocaleObject)

      targetObject.el = mergeLocaleObjects(
        enObject.el as LocaleObject,
        targetObject.el as LocaleObject
      )

      const newKeys = countKeys(targetObject.el as LocaleObject)
      const addedKeys = newKeys - originalKeys

      if (addedKeys > 0) {
        const newContent = generateTypescriptFile(targetObject)
        writeFileSync(filePath, newContent, 'utf-8')

        consola.success(
          `Updated ${fileName} - ${addedKeys} fields waiting to be translated`
        )
        totalUpdated++
        totalAdded += addedKeys
      } else {
        consola.success(`${fileName} is up to date`)
      }
    } catch (error) {
      consola.error(`Failed to process ${fileName}:`, error)
    }
  })

  consola.log(`🎉 Synchronization completed!`)
  consola.log(
    `📊 Updated ${totalUpdated} files - ${totalAdded} fields waiting to be translated`
  )
}

main()
