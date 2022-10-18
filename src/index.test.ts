import * as dax from ".";

describe("datesMTD()", () => {
  it("should return the dates between the given date and the start of the given date's year", () => {
    const date = new Date("2022-10-18");
    const dates = dax.datesMTD(date);
    expect(dates.size).toBe(17);
  });
});

describe("datesQTD()", () => {
  it("should return the dates between the given date and the start of the given date's quarter", () => {
    const date = new Date("2022-11-18");
    const dates = dax.datesQTD(date);
    expect(dates.size).toBe(48);
  });
});

describe("datesYTD()", () => {
  it("should return the dates between the given date and the start of the given date's year", () => {
    const date = new Date("2022-10-18");
    const dates = dax.datesYTD(date);
    expect(dates.size).toBe(290);
  });
});
