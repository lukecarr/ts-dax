import { beforeAll, describe, expect, it } from 'vitest'
import * as util from '../src/util'

describe('getDates()', () => {
  let start: Date, end: Date, dates: Date[]

  beforeAll(() => {
    start = new Date('2022-10-01')
    end = new Date('2022-10-04')
    dates = [...util.getDates(start, end)]
  })

  it('should return the dates between the given start and end', () => {
    expect(dates).toStrictEqual([start, new Date('2022-10-02'), new Date('2022-10-03')])
  })

  it('should include the given start date', () => {
    expect(dates).toContainEqual(start)
  })

  it('should not include the given end date', () => {
    expect(dates).not.toContainEqual(end)
  })

  it('should accept a step argument to change the date increment amount', () => {
    const dates = [...util.getDates(start, end, 2)]
    expect(dates).toStrictEqual([start, new Date('2022-10-03')])
  })
})

describe('getQuarter()', () => {
  it('should return the quarter (0, 1, 2, or 3) for a given date', () => {
    const date = new Date('2022-10-01')
    const quarter = util.getQuarter(date)
    expect(quarter).toBe(3)
  })
})
