/* eslint-disable */
'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
try {
  require.resolve('@vue/compiler-sfc')
}
catch (e) {
  throw new Error('rollup-plugin-vue requires @vue/compiler-sfc to be present in the dependency ' +
        'tree.')
}
const compiler_sfc_1 = require('@vue/compiler-sfc')
const fs_1 = __importDefault(require('fs'))
const debug_1 = __importDefault(require('debug'))
const hash_sum_1 = __importDefault(require('hash-sum'))
const path_1 = require('path')
const querystring_1 = __importDefault(require('querystring'))
const rollup_pluginutils_1 = require('rollup-pluginutils')
const debug = debug_1.default('rollup-plugin-vue')
const defaultOptions = {
  include: /\.vue$/,
  exclude: [],
  target: 'browser',
  exposeFilename: false,
  customBlocks: [],
}
function PluginVue(userOptions = {}) {
  const options = {
    ...defaultOptions,
    ...userOptions,
  }
  const isServer = options.target === 'node'
  const isProduction = process.env.NODE_ENV === 'production' || process.env.BUILD === 'production'
  const rootContext = process.cwd()
  const filter = rollup_pluginutils_1.createFilter(options.include, options.exclude)
  const filterCustomBlock = createCustomBlockFilter(options.customBlocks)
  return {
    name: 'vue',
    async resolveId(id, importer) {
      const query = parseVuePartRequest(id)
      if (query.vue) {
        if (query.src) {
          const resolved = await this.resolve(query.filename, importer, {
            skipSelf: true,
          })
          if (resolved) {
            cache.set(resolved.id, getDescriptor(importer))
            const [, originalQuery] = id.split('?', 2)
            resolved.id += `?${originalQuery}`
            return resolved
          }
        }
        else if (!filter(query.filename)) {
          return undefined
        }
        debug(`resolveId(${id})`)
        return id
      }
      return undefined
    },
    load(id) {
      const query = parseVuePartRequest(id)
      if (query.vue) {
        if (query.src) {
          return fs_1.default.readFileSync(query.filename, 'utf-8')
        }
        const descriptor = getDescriptor(query.filename)
        if (descriptor) {
          const block = query.type === 'template'
            ? descriptor.template
            : query.type === 'script'
              ? descriptor.script
              : query.type === 'style'
                ? descriptor.styles[query.index]
                : typeof query.index === 'number'
                  ? descriptor.customBlocks[query.index]
                  : null
          if (block) {
            return {
              code: block.content,
              map: normalizeSourceMap(block.map, id),
            }
          }
        }
      }
      return undefined
    },
    async transform(code, id) {
      const query = parseVuePartRequest(id)
      if (query.vue) {
        if (!query.src && !filter(query.filename))
          return null
        const descriptor = getDescriptor(query.filename)
        const hasScoped = descriptor.styles.some(s => s.scoped)
        if (query.src) {
          this.addWatchFile(query.filename)
        }
        if (query.type === 'template') {
          debug(`transform(${id})`)
          const block = descriptor.template
          const preprocessLang = block.lang
          const preprocessOptions = preprocessLang &&
                        options.templatePreprocessOptions &&
                        options.templatePreprocessOptions[preprocessLang]
          const result = compiler_sfc_1.compileTemplate({
            filename: query.filename,
            source: code,
            inMap: query.src ? undefined : block.map,
            preprocessLang,
            preprocessOptions,
            preprocessCustomRequire: options.preprocessCustomRequire,
            compiler: options.compiler,
            ssr: isServer,
            compilerOptions: {
              ...options.compilerOptions,
              scopeId: hasScoped ? `data-v-${query.id}` : undefined,
              bindingMetadata: descriptor.script
                ? descriptor.script.bindings
                : undefined,
            },
            transformAssetUrls: options.transformAssetUrls,
          })
          if (result.errors.length) {
            result.errors.forEach(error => this.error(typeof error === 'string'
              ? { id: query.filename, message: error }
              : createRollupError(query.filename, error)))
            return null
          }
          if (result.tips.length) {
            result.tips.forEach(tip => this.warn({
              id: query.filename,
              message: tip,
            }))
          }
          return {
            code: result.code,
            map: normalizeSourceMap(result.map, id),
          }
        }
        else if (query.type === 'style') {
          debug(`transform(${id})`)
          const block = descriptor.styles[query.index]
          let preprocessOptions = options.preprocessOptions || {}
          const preprocessLang = (options.preprocessStyles
            ? block.lang
            : undefined)
          if (preprocessLang) {
            preprocessOptions =
                            preprocessOptions[preprocessLang] || preprocessOptions
            // include node_modules for imports by default
            switch (preprocessLang) {
              case 'scss':
              case 'sass':
                preprocessOptions = {
                  includePaths: ['node_modules'],
                  ...preprocessOptions,
                }
                break
              case 'less':
              case 'stylus':
                preprocessOptions = {
                  paths: ['node_modules'],
                  ...preprocessOptions,
                }
            }
          }
          else {
            preprocessOptions = {}
          }
          const result = await compiler_sfc_1.compileStyleAsync({
            filename: query.filename,
            id: `data-v-${query.id}`,
            source: code,
            scoped: block.scoped,
            vars: !!block.vars,
            modules: !!block.module,
            postcssOptions: options.postcssOptions,
            postcssPlugins: options.postcssPlugins,
            modulesOptions: options.cssModulesOptions,
            preprocessLang,
            preprocessCustomRequire: options.preprocessCustomRequire,
            preprocessOptions,
          })
          if (result.errors.length) {
            result.errors.forEach(error => this.error({
              id: query.filename,
              message: error.message,
            }))
            return null
          }
          if (query.module) {
            return {
              code: `export default ${_(result.modules)}`,
              map: null,
            }
          }
          else {
            return {
              code: result.code,
              map: normalizeSourceMap(result.map, id),
            }
          }
        }
        return null
      }
      else if (filter(id)) {
        debug(`transform(${id})`)
        const { descriptor, errors } = parseSFC(code, id, rootContext)
        if (errors.length) {
          errors.forEach(error => this.error(createRollupError(id, error)))
          return null
        }
        // module id for scoped CSS & hot-reload
        const output = transformVueSFC(code, id, descriptor, { rootContext, isProduction, isServer, filterCustomBlock }, options)
        debug('transient .vue file:', '\n' + output + '\n')
        return {
          code: output,
          map: {
            mappings: '',
          },
        }
      }
      else {
        return null
      }
    },
  }
}
exports.default = PluginVue
function createCustomBlockFilter(queries) {
  if (!queries || queries.length === 0)
    return () => false
  const allowed = new Set(queries.filter(query => /^[a-z]/i.test(query)))
  const disallowed = new Set(queries
    .filter(query => /^![a-z]/i.test(query))
    .map(query => query.substr(1)))
  const allowAll = queries.includes('*') || !queries.includes('!*')
  return type => {
    if (allowed.has(type))
      return true
    if (disallowed.has(type))
      return true
    return allowAll
  }
}
function parseVuePartRequest(id) {
  const [filename, query] = id.split('?', 2)
  if (!query)
    return { vue: false, filename }
  const raw = querystring_1.default.parse(query)
  if ('vue' in raw) {
    return {
      ...raw,
      filename,
      vue: true,
      index: Number(raw.index),
      src: 'src' in raw,
      scoped: 'scoped' in raw,
    }
  }
  return { vue: false, filename }
}
const cache = new Map()
function getDescriptor(id) {
  if (cache.has(id)) {
    return cache.get(id)
  }
  throw new Error(`${id} is not parsed yet`)
}
function parseSFC(code, id, sourceRoot) {
  const { descriptor, errors } = compiler_sfc_1.parse(code, {
    sourceMap: true,
    filename: id,
    sourceRoot: sourceRoot,
  })
  cache.set(id, descriptor)
  return { descriptor, errors: errors }
}
function transformVueSFC(code, resourcePath, descriptor, { rootContext, isProduction, isServer, filterCustomBlock }, options) {
  const shortFilePath = path_1.relative(rootContext, resourcePath)
    .replace(/^(\.\.[\/\\])+/, '')
    .replace(/\\/g, '/')
  const id = hash_sum_1.default(isProduction ? shortFilePath + '\n' + code : shortFilePath)
  // feature information
  const hasScoped = descriptor.styles.some(s => s.scoped)
  const templateImport = !descriptor.template
    ? ''
    : getTemplateCode(descriptor, resourcePath, id, hasScoped, isServer)
  const renderReplace = !descriptor.template
    ? ''
    : isServer
      ? `script.ssrRender = ssrRender`
      : `script.render = render`
  const scriptImport = getScriptCode(descriptor, resourcePath)
  const stylesCode = getStyleCode(descriptor, resourcePath, id, options.preprocessStyles)
  const customBlocksCode = getCustomBlock(descriptor, resourcePath, filterCustomBlock)
  const output = [
    scriptImport,
    templateImport,
    stylesCode,
    customBlocksCode,
    renderReplace,
  ]
  if (hasScoped) {
    output.push(`script.__scopeId = ${_(`data-v-${id}`)}`)
  }
  if (!isProduction) {
    output.push(`script.__file = ${_(shortFilePath)}`)
  }
  else if (options.exposeFilename) {
    output.push(`script.__file = ${_(path_1.basename(shortFilePath))}`)
  }
  output.push('export default script')
  return output.join('\n')
}
function getTemplateCode(descriptor, resourcePath, id, hasScoped, isServer) {
  const renderFnName = isServer ? 'ssrRender' : 'render'
  let templateImport = `const ${renderFnName} = () => {}`
  let templateRequest
  if (descriptor.template) {
    const src = descriptor.template.src || resourcePath
    const idQuery = `&id=${id}`
    const scopedQuery = hasScoped ? `&scoped=true` : ``
    const srcQuery = descriptor.template.src ? `&src` : ``
    const attrsQuery = attrsToQuery(descriptor.template.attrs, 'js', true)
    const query = `?vue&type=template${idQuery}${srcQuery}${scopedQuery}${attrsQuery}`
    templateRequest = _(src + query)
    templateImport = `import { ${renderFnName} } from ${templateRequest}`
  }
  return templateImport
}
function getScriptCode(descriptor, resourcePath) {
  let scriptImport = `const script = {}`
  if (descriptor.script || descriptor.scriptSetup) {
    if (compiler_sfc_1.compileScript) {
      descriptor.script = compiler_sfc_1.compileScript(descriptor)
    }
    if (descriptor.script) {
      const src = descriptor.script.src || resourcePath
      const attrsQuery = attrsToQuery(descriptor.script.attrs, 'js')
      const srcQuery = descriptor.script.src ? `&src` : ``
      const query = `?vue&type=script${srcQuery}${attrsQuery}`
      const scriptRequest = _(src + query)
      scriptImport =
                `import script from ${scriptRequest}\n` +
                    `export * from ${scriptRequest}` // support named exports
    }
  }
  return scriptImport
}
function getStyleCode(descriptor, resourcePath, id, preprocessStyles) {
  let stylesCode = ``
  let hasCSSModules = false
  if (descriptor.styles.length) {
    descriptor.styles.forEach((style, i) => {
      const src = style.src || resourcePath
      // do not include module in default query, since we use it to indicate
      // that the module needs to export the modules json
      const attrsQuery = attrsToQuery(style.attrs, 'css', preprocessStyles)
      const attrsQueryWithoutModule = attrsQuery.replace(/&module(=true|=[^&]+)?/, '')
      // make sure to only pass id when necessary so that we don't inject
      // duplicate tags when multiple components import the same css file
      const idQuery = style.scoped ? `&id=${id}` : ``
      const srcQuery = style.src ? `&src` : ``
      const query = `?vue&type=style&index=${i}${srcQuery}${idQuery}`
      const styleRequest = src + query + attrsQuery
      const styleRequestWithoutModule = src + query + attrsQueryWithoutModule
      if (style.module) {
        if (!hasCSSModules) {
          stylesCode += `\nconst cssModules = script.__cssModules = {}`
          hasCSSModules = true
        }
        stylesCode += genCSSModulesCode(id, i, styleRequest, styleRequestWithoutModule, style.module)
      }
      else {
        stylesCode += `\nimport ${_(styleRequest)}`
      }
      // TODO SSR critical CSS collection
    })
  }
  return stylesCode
}
function getCustomBlock(descriptor, resourcePath, filter) {
  let code = ''
  descriptor.customBlocks.forEach((block, index) => {
    if (filter(block.type)) {
      const src = block.src || resourcePath
      const attrsQuery = attrsToQuery(block.attrs, block.type)
      const srcQuery = block.src ? `&src` : ``
      const query = `?vue&type=${block.type}&index=${index}${srcQuery}${attrsQuery}`
      const request = _(src + query)
      code += `import block${index} from ${request}\n`
      code += `if (typeof block${index} === 'function') block${index}(script)\n`
    }
  })
  return code
}
function createRollupError(id, error) {
  if ('code' in error) {
    return {
      id,
      plugin: 'vue',
      pluginCode: String(error.code),
      message: error.message,
      frame: error.loc.source,
      parserError: error,
      loc: error.loc
        ? {
          file: id,
          line: error.loc.start.line,
          column: error.loc.start.column,
        }
        : undefined,
    }
  }
  else {
    return {
      id,
      plugin: 'vue',
      message: error.message,
      parserError: error,
    }
  }
}
// these are built-in query parameters so should be ignored
// if the user happen to add them as attrs
const ignoreList = ['id', 'index', 'src', 'type', 'lang']
function attrsToQuery(attrs, langFallback, forceLangFallback = false) {
  let query = ``
  for (const name in attrs) {
    const value = attrs[name]
    if (!ignoreList.includes(name)) {
      query += `&${querystring_1.default.escape(name)}${value ? `=${querystring_1.default.escape(String(value))}` : ``}`
    }
  }
  if (langFallback || attrs.lang) {
    query +=
            `lang` in attrs
              ? forceLangFallback
                ? `&lang.${langFallback}`
                : `&lang.${attrs.lang}`
              : `&lang.${langFallback}`
  }
  return query
}
function _(any) {
  return JSON.stringify(any)
}
function normalizeSourceMap(map, id) {
  if (!map)
    return null
  if (!id.includes('type=script')) {
    map.file = id
    map.sources[0] = id
  }
  return {
    ...map,
    version: Number(map.version),
    mappings: typeof map.mappings === 'string' ? map.mappings : '',
  }
}
function genCSSModulesCode(
// @ts-ignore
  id, index, request, requestWithoutModule, moduleName) {
  const styleVar = `style${index}`
  let code =
    // first import the CSS for extraction
    `\nimport ${_(requestWithoutModule)}` +
        // then import the json file to expose to component...
        `\nimport ${styleVar} from ${_(request + '.js')}`
  // inject variable
  const name = typeof moduleName === 'string' ? moduleName : '$style'
  code += `\ncssModules["${name}"] = ${styleVar}`
  return code
}
// overwrite for cjs require('rollup-plugin-vue')() usage
module.exports = PluginVue
