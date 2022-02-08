import {
  startOfToday,
  add as addTo,
  isBefore,
  isEqual,
  isWithinInterval,
} from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";
export function getCurrentYear() {
  return startOfToday().getFullYear();
}
export function add(date, number, type = DATE_UNIT_TYPES.DAYS) {
  return addTo(date, { [type]: number });
}
export function isWithinRange(date, from, to) {
  return isWithinInterval(date, { start: from, end: to });
}
export function isDateBefore(date, compareDate) {
  return isBefore(date, compareDate);
}
export function isSameDay(date, compareDate) {
  return isEqual(date, compareDate);
}
//# sourceMappingURL=dateUtils.js.map
