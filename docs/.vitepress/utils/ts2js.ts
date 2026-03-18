import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import prettierSync from '@prettier/sync'
import { JsxEmit, ModuleKind, ScriptTarget, transpileModule } from 'typescript'

const prettierOptions = JSON.parse(
  readFileSync(resolve(__dirname, '../../../.prettierrc'), 'utf-8')
)

export function sfcTs2js(content: string): string {
  const scriptReg =
    /<script[\s\S]*?(?:lang="(ts|tsx)")[\s\S]*?>([\s\S]*?)<\/script>/
  const matched = content.match(scriptReg)
  if (matched && matched.index !== undefined) {
    const lang = matched[1]
    const jsLangAttr = lang === 'tsx' ? ' lang="jsx"' : ''
    const script = matched[2]
    const header = content.slice(0, matched.index)
    const footer = content.slice(matched.index + matched[0].length)
    return `${header}<script${jsLangAttr} setup>\n${ts2Js(script)}\n</script>${footer}`
  }
  return content
}

function ts2Js(content: string): string {
  const beforeTransformContent = content.replace(
    /\n(\s)*\n/g,
    '\n// blankline\n'
  )
  const result = transpileModule(beforeTransformContent, {
    compilerOptions: {
      module: ModuleKind.ESNext,
      target: ScriptTarget.ESNext,
      // Ensures the import is not removed or changed
      verbatimModuleSyntax: true,
      jsx: JsxEmit.Preserve,
    },
  })
  const formatted = prettierSync.format(result.outputText, {
    ...prettierOptions,
    parser: 'babel',
  })
  return formatted.trim().replace(/(\/\/ blankline(\n)?)+/g, '\n')
}
