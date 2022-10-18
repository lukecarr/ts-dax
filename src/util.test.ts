import * as util from "./util";

describe("getDates(start: Date, end: Date): Set<Date>", () => {
  let start: Date, end: Date, dates: Date[];

  beforeAll(() => {
    start = new Date("2022-10-01");
    end = new Date("2022-10-04");
    dates = [...util.getDates(start, end)];
  });

  it("should return the dates between the given start and end", () => {
    expect(dates).toStrictEqual([start, new Date("2022-10-02"), new Date("2022-10-03")]);
  });

  it("should include the given start date", () => {
    expect(dates).toContainEqual(start);
  });

  it("should not include the given end date", () => {
    expect(dates).not.toContainEqual(end);
  });
});

describe("getQuarter(date: Date): number", () => {
  it("should return the quarter (0, 1, 2, or 3) for a given date", () => {
    const date = new Date("2022-10-01");
    const quarter = util.getQuarter(date);
    expect(quarter).toBe(3);
  });
});