export function getDates(start: Date, end: Date, step = 1): Set<Date> {
  const dates = new Set<Date>()
  const date = new Date(start)
  while (date < end) {
    dates.add(new Date(date))
    date.setDate(date.getDate() + step)
  }
  return dates
}

export function getQuarter(date: Date): number {
  return Math.floor((date.getMonth() + 3) / 3) - 1
}
