export function getDates(start: Date, end: Date): Set<Date> {
  const dates = new Set<Date>();
  const date = new Date(start);
  while (date < end) {
    dates.add(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

export function getQuarter(date: Date): number {
  return Math.floor((date.getMonth() + 3) / 3) - 1;
}