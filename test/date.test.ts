import { beforeEach, describe, expect, it } from 'vitest'
import * as dax from '../src/date'

describe('calendar', () => {
  let start: Date, end: Date, dates: Date[]

  beforeEach(() => {
    start = new Date('2022-10-01')
    end = new Date('2022-10-04')
  })

  it('should return the dates between the given start and end', () => {
    dates = [...dax.calendar(start, end)]
    expect(dates).toStrictEqual([start, new Date('2022-10-02'), new Date('2022-10-03')])
  })

  it('should throw an error if the given start is greater than the end', () => {
    expect(() => dax.calendar(end, start)).toThrowError('start date cannot be greater than end date')
  })
})

describe('dateDiff', () => {
  it('should return the years between two dates', () => {
    let years = dax.dateDiff(new Date('2022-03-12'), new Date('2025-02-10'), dax.Interval.YEAR)
    expect(years).toBe(2)

    years = dax.dateDiff(new Date('2022-03-12'), new Date('2024-03-10'), dax.Interval.YEAR)
    expect(years).toBe(1)
  })

  it('should return the months between two dates', () => {
    let months = dax.dateDiff(new Date('2022-04-10'), new Date('2022-10-03'), dax.Interval.MONTH)
    expect(months).toBe(5)

    months = dax.dateDiff(new Date('2022-04-10'), new Date('2022-04-25'), dax.Interval.MONTH)
    expect(months).toBe(0)
  })

  it('should return the days between two dates', () => {
    const days = dax.dateDiff(new Date('2022-04-01'), new Date('2022-05-11'), dax.Interval.DAY)
    expect(days).toBe(40)
  })

  it('should return the hours between two dates', () => {
    const hours = dax.dateDiff(new Date('2022-01-01 08:30:00'), new Date('2022-01-01 14:15:00'), dax.Interval.HOUR)
    expect(hours).toBe(5)
  })

  it('should return the minutes between two dates', () => {
    const minutes = dax.dateDiff(new Date('2022-01-01 08:30:00'), new Date('2022-01-01 09:23:00'), dax.Interval.MINUTE)
    expect(minutes).toBe(53)
  })

  it('should return the seconds between two dates', () => {
    const seconds = dax.dateDiff(new Date('2022-01-01 08:30:15'), new Date('2022-01-01 08:30:45'), dax.Interval.SECOND)
    expect(seconds).toBe(30)
  })
})

describe('day', () => {
  it('should return the day of the month, between 1 and 31', () => {
    const date = new Date('23 July 2001')
    const day = dax.day(date)
    expect(day).toBe(23)
  })
})

describe('datesMTD', () => {
  it("should return the dates between the given date and the start of the given date's year", () => {
    const date = new Date('2022-10-18')
    const dates = dax.datesMTD(date)
    expect(dates.size).toBe(17)
  })
})

describe('datesQTD', () => {
  it("should return the dates between the given date and the start of the given date's quarter", () => {
    const date = new Date('2022-11-18')
    const dates = dax.datesQTD(date)
    expect(dates.size).toBe(48)
  })
})

describe('datesYTD', () => {
  it("should return the dates between the given date and the start of the given date's year", () => {
    const date = new Date('2022-10-18')
    const dates = dax.datesYTD(date)
    expect(dates.size).toBe(290)
  })
})
