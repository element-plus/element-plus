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
  return content
    .replace(/<(script|style)[\s\S]+<\/\1>/g, '')
    .trim()
}

const setupCommentGlobalRegx = /<!--[\r?\n|\r]?(<setup>[\s\S]+)-->/g
export function removeSetup (content) {
  return content
    .replace(setupCommentGlobalRegx, '')
    .trim()
}

const setupCommentRegx = /<!--[\r?\n|\r]?(<setup>[\s\S]+)-->/
export function stripSetup(content) {
  const result = content.match(setupCommentRegx)
  const comment = result && result[1] ? result[1].trim() : ''
  if (!comment) return comment
  const result2 = comment.match(/<(setup)>([\s\S]+)<\/\1>/)
  return result2 && result2[2] ? result2[2].trim() : ''
}
