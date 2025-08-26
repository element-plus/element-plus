export const isKorean = (text: string) =>
  /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text)
