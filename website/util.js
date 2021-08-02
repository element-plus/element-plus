export function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

const setupCommentGlobalRegx = /<!--[\r?\n|\r]?(<setup>[\s\S]+)-->/g
export function removeSetup(content) {
  return content.replace(setupCommentGlobalRegx, '').trim()
}

const setupCommentRegx = /<!--[\r?\n|\r]?(<setup>[\s\S]+)-->/
export function stripSetup(content) {
  const result = content.match(setupCommentRegx)
  const comment = result && result[1] ? result[1].trim() : ''
  if (!comment) return comment
  const result2 = comment.match(/<(setup)>([\s\S]+)<\/\1>/)
  return result2 && result2[2] ? result2[2].trim() : ''
}

/**
 * format kebab-case to PascalCase with space (Pascal Case)
 * @param {string} type
 */
export function formatType(type) {
  return type
    .split('-')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}

/**
 * get css var value
 * @param {string} namespace
 * @param {string} type
 * @returns
 */
export function getCssVarValue(namespace, type) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--el-${namespace}-${type}`,
  )
}

/**
 * get css var name
 * @param {string} namespace
 * @param {string} type
 * @returns
 */
export function getCssVarName(namespace, type) {
  return `var(--el-${namespace}-${type})`
}
