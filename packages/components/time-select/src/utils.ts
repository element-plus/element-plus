interface Time {
  hours: number
  minutes: number
}

export const parseTime = (time: string): null | Time => {
  const values = (time || '').split(':')
  if (values.length >= 2) {
    let hours = Number.parseInt(values[0], 10)
    const minutes = Number.parseInt(values[1], 10)
    const timeUpper = time.toUpperCase()
    if (timeUpper.includes('AM') && hours === 12) {
      hours = 0
    } else if (timeUpper.includes('PM') && hours !== 12) {
      hours += 12
    }
    return {
      hours,
      minutes,
    }
  }

  return null
}

export const compareTime = (time1: string, time2: string): number => {
  const value1 = parseTime(time1)
  if (!value1) return -1
  const value2 = parseTime(time2)
  if (!value2) return -1
  const minutes1 = value1.minutes + value1.hours * 60
  const minutes2 = value2.minutes + value2.hours * 60
  if (minutes1 === minutes2) {
    return 0
  }
  return minutes1 > minutes2 ? 1 : -1
}

export const padTime = (time: number | string) => {
  return `${time}`.padStart(2, '0')
}
export const formatTime = (time: Time): string => {
  return `${padTime(time.hours)}:${padTime(time.minutes)}`
}

export const nextTime = (time: string, step: string): string => {
  const timeValue = parseTime(time)
  if (!timeValue) return ''

  const stepValue = parseTime(step)
  if (!stepValue) return ''

  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes,
  }
  next.minutes += stepValue.minutes
  next.hours += stepValue.hours
  next.hours += Math.floor(next.minutes / 60)
  next.minutes = next.minutes % 60
  return formatTime(next)
}
