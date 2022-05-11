export const rangeArr = (n: number) =>
  Array.from(Array.from({ length: n }).keys())

export const extractDateFormat = (format: string) => {
  return format
    .replace(/\W?m{1,2}.*|\W?ZZ.*/g, '')
    .replace(/\W?h{1,2}.*|\W?s{1,3}.*|\W?a.*/gi, '')
    .trim()
}

export const extractTimeFormat = (format: string) => {
  let result = format
    .replace(
      /(\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}).*(\W?h{1,2}|\W?H{1,2}|\W?m{1,2}|\W?s{1,3}|\W?Z{1,2}|\W?A{1,2}|\W?a{1,2})/g,
      '$2'
    )
    .trim()
  let end = format.indexOf(result) - 1
  while (end > 0 && format[end] === result[0]) {
    result = `${format[end]}${result}`
    end--
  }
  return result
}
