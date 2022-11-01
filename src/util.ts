export function getDates(start: Date, end: Date, step = 1, inclusive = false): Set<Date> {
  const dates = new Set<Date>()
  const date = new Date(start)
  const upper = inclusive ? new Date(end.getTime() + 1000 * 60 * 60 * 24) : end
  while (date < upper) {
    dates.add(new Date(date))
    date.setDate(date.getDate() + step)
  }
  return dates
}

export function getQuarter(date: Date): number {
  return Math.floor((date.getMonth() + 3) / 3) - 1
}
