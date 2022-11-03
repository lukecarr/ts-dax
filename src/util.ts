export function getDates(
  start: DateParam,
  end: DateParam,
  step = 1,
  inclusive = false,
): Set<Date> {
  const dates = new Set<Date>()
  const date = new Date(start)
  const endDate = resolveParam(end)
  const upper = inclusive ? new Date(endDate.getTime() + 1000 * 60 * 60 * 24) : endDate
  while (date < upper) {
    dates.add(new Date(date))
    date.setDate(date.getDate() + step)
  }
  return dates
}

export function getQuarter(date: DateParam): number {
  const resolvedDate = resolveParam(date)
  return Math.floor((resolvedDate.getMonth() + 3) / 3) - 1
}

export function getStartOfQuarter(date: DateParam): Date {
  const resolvedDate = resolveParam(date)
  return new Date(resolvedDate.getFullYear(), getQuarter(resolvedDate) * 3, 1)
}

export type DateParam = Date | string | number

export function resolveParam(param: DateParam): Date {
  return typeof param === 'string' || typeof param === 'number' ? new Date(param) : param
}
