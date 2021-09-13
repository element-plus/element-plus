import dayjs from 'dayjs'

export const rangeArr = (n) => {
  return Array.from(Array(n).keys())
}

export const extractDateFormat = (format: string) => {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim()
}

export const extractTimeFormat = (format: string) => {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, '')
    .trim()
}

export const modifyDate = function (date, y, m, d) {
  return dayjs(
    new Date(
      y,
      m,
      d,
      date.hour(),
      date.minute(),
      date.second(),
      date.millisecond()
    )
  )
}

export const modifyTime = function (date, h, m, s) {
  return dayjs(
    new Date(
      date.year(),
      date.month(),
      date.date(),
      h,
      m,
      s,
      date.millisecond()
    )
  )
}

export const modifyWithTimeString = (date, time) => {
  if (date == null || !time) {
    return date
  }
  return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds())
}
