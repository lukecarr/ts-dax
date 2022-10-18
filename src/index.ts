import * as util from "./util";

export function datesMTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), date.getMonth(), 1), date);
}

export function datesQTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), util.getQuarter(date) * 3, 1), date);
}

export function datesYTD(date: Date): Set<Date> {
  return util.getDates(new Date(date.getFullYear(), 0, 1), date);
}
