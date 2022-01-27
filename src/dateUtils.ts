import moment from "moment";
import {startOfToday, add as addTo, isBefore ,isEqual, isWithinInterval } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return startOfToday().getFullYear();
}

export function add(date: Date, number: number, type: moment.unitOfTime.DurationConstructor = DATE_UNIT_TYPES.DAYS): Date {
  return addTo(date, { [type]: number });
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isWithinInterval(date, {start:from, end: to} );
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return isEqual(date, compareDate);
}
