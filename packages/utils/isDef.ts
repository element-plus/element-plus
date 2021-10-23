export function isKorean(text: string): boolean {
  const reg = /([()|\u3130-\u318F\uAC00-\uD7AF])+/gi
  return reg.test(text)
}
