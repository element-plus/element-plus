export const rangeArr = (n: number) =>
  Array.from(Array.from({ length: n }).keys())

export const extractDateFormat = (format: string) => {
  return format
    .replace(/\W?m{1,2}.*|\W?Z{1,2}.*/g, '')
    .replace(/\W?h{1,2}.*|\W?s{1,3}.*|\W?a.*/gi, '')
    .trim()
}

export const extractTimeFormat = (format: string) => {
  let result = format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, '')
    .trim()
  const timeChart = ['H', 'h', 'm', 's', 'Z', 'A', 'a']
  while (result && !timeChart.includes(result[0])) {
    result = result.slice(1)
  }
  return result
}
