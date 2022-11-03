import * as util from './util'
import type { DateParam } from './util'

/**
 * Returns a set of contiguous dates.
 *
 * An error is thrown if the start date is greater than the end date.
 *
 * @param start The start date.
 * @param end The end date.
 * @returns A set of contiguous dates. The range of dates is
 * from the specified start date to the specified end date,
 * inclusive of those two dates.
 */
export function calendar(start: DateParam, end: DateParam): Set<Date> {
  if (start > end) throw new Error('start date cannot be greater than end date')
  return util.getDates(start, end)
}

export enum Interval {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

const intervalSeconds: {
  second: number
  minute: number
  hour: number
  day: number
  week: number
} = {
  second: 1,
  minute: 60,
  hour: 60 * 60,
  day: 60 * 60 * 24,
  week: 60 * 60 * 24 * 7,
}

export function dateDiff(x: DateParam, y: DateParam, interval: Interval): number {
  const xDate = util.resolveParam(x), yDate = util.resolveParam(y)
  switch (interval) {
    case Interval.YEAR:
      let diff = yDate.getFullYear() - xDate.getFullYear()
      if (
        xDate.getMonth() > yDate.getMonth()
        || xDate.getMonth() === yDate.getMonth() && xDate.getDate() > yDate.getDate()
      ) {
        diff--
      }
      return diff
    case Interval.MONTH:
      let months = (yDate.getFullYear() - xDate.getFullYear()) * 12 - xDate.getMonth() - 1 + yDate.getMonth()
      return months <= 0 ? 0 : months
    default:
      const seconds = (yDate.getTime() - xDate.getTime()) / 1000
      return Math.floor(seconds / intervalSeconds[interval])
  }
}

/**
 * Returns the day of the month, a number from 1 to 31.
 * @param date A date object.
 * @returns An integer number indicating the day of the month.
 */
export function day(date: DateParam): number {
  return util.resolveParam(date).getDate()
}

/**
 * Returns the dates for the month to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the month to date.
 */
export function datesMTD(date: DateParam): Set<Date> {
  const resolvedDate = util.resolveParam(date)
  return util.getDates(new Date(resolvedDate.getFullYear(), resolvedDate.getMonth(), 1), resolvedDate)
}

/**
 * Returns the dates for the quarter to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the quarter to date.
 */
export function datesQTD(date: DateParam): Set<Date> {
  return util.getDates(util.getStartOfQuarter(date), date)
}

/**
 * Returns the dates for the year to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the year to date.
 */
export function datesYTD(date: DateParam): Set<Date> {
  const resolvedDate = util.resolveParam(date)
  return util.getDates(new Date(resolvedDate.getFullYear(), 0, 1), resolvedDate)
}
