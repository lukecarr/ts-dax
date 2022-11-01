import * as util from './util'

/**
 * Returns a set of contiguous dates.
 *
 * An error is thrown if the start date is greater than the end date.
 *
 * @param start The start date.
 * @param end The end date.
 * @returns A set of contiguous dates. The range of dates if
 * rom the specified start date to the specified end date,
 * inclusive of those two dates.
 */
export function calendar(start: Date, end: Date): Set<Date> {
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

export function dateDiff(x: Date, y: Date, interval: Interval): number {
  switch (interval) {
    case Interval.YEAR:
      let diff = y.getFullYear() - x.getFullYear()
      if (x.getMonth() > y.getMonth() || x.getMonth() === y.getMonth() && x.getDate() > y.getDate()) {
        diff--
      }
      return diff
    case Interval.MONTH:
      let months = (y.getFullYear() - x.getFullYear()) * 12 - x.getMonth() - 1 + y.getMonth()
      return months <= 0 ? 0 : months
    default:
      const seconds = (y.getTime() - x.getTime()) / 1000
      return Math.floor(seconds / intervalSeconds[interval])
  }
}

/**
 * Returns the day of the month, a number from 1 to 31.
 * @param date A date object.
 * @returns An integer number indicating the day of the month.
 */
export function day(date: Date): number {
  return date.getDate()
}

/**
 * Returns the dates for the month to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the month to date.
 */
export function datesMTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), date.getMonth(), 1), date)
}

/**
 * Returns the dates for the quarter to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the quarter to date.
 */
export function datesQTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), util.getQuarter(date) * 3, 1), date)
}

/**
 * Returns the dates for the year to (provided) date.
 * @param date A date object.
 * @returns A set of dates for the year to date.
 */
export function datesYTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), 0, 1), date)
}
