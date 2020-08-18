import dayjs from 'dayjs'

export const modifyDate = function(date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}
export const limitTimeRange = function(date, ranges, format = 'HH:mm:ss') {
  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date
  const normalizeDate = date => {
    return dayjs(dayjs(date).format(format), format).toDate()
  }
  const ndate = normalizeDate(date)
  const nranges = ranges.map(range => range.map(normalizeDate))
  if (nranges.some(nrange => ndate >= nrange[0] && ndate <= nrange[1])) return date

  let minDate = nranges[0][0]
  let maxDate = nranges[0][0]

  nranges.forEach(nrange => {
    minDate = new Date(Math.min(nrange[0], minDate))
    maxDate = new Date(Math.max(nrange[1], minDate))
  })
  const ret = ndate < minDate ? minDate : maxDate
  // preserve Year/Month/Date
  return modifyDate(
    ret,
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  )
}
const isDate = function(date) {
  if (date === null || date === undefined) return false
  if (isNaN(new Date(date).getTime())) return false
  if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
  return true
}
export const clearMilliseconds = function(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0)
}
export const timeWithinRange = function(date, selectableRange, format) {
  const limitedDate = limitTimeRange(date, selectableRange, format)
  return limitedDate.getTime() === date.getTime()
}
export const parseDate = (string, format ) => {
  return dayjs(string, format).toDate()
}
