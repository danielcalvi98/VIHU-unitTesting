import { DATE_UNIT_TYPES } from "../constants";
import {
  getCurrentYear,
  add,
  isWithinRange,
  isDateBefore,
  isSameDay,
} from "../dateUtils";
describe("Date Utils", () => {
  describe("getCurrentYear", () => {
    it("should return current year", () => {
      const result = getCurrentYear();
      expect(result).toBe(2022);
    });
  });
  describe("add day", () => {
    it("should add days to the date correctly", () => {
      const result = add(new Date("2019-06-11"), 2);
      expect(result).toStrictEqual(new Date("2019-06-13"));
    });
  });
  describe("add month", () => {
    it("should add months to the date correctly", () => {
      const result = add(new Date("2019-06-11"), 2, DATE_UNIT_TYPES.MONTHS);
      expect(result).toStrictEqual(new Date("2019-08-11"));
    });
  });
  describe("isWithinRange", () => {
    it("should return true if date is within given range, else false", () => {
      const result = isWithinRange(
        new Date("2022-07-30"),
        new Date("2022-01-01"),
        new Date("2023-01-01")
      );
      expect(result).toBe("true");
    });
  });
  describe("isDateBefore", () => {
    it("should return true if date is before compare date", () => {
      const result = isDateBefore(
        new Date("2022-07-30"),
        new Date("2022-08-30")
      );
      expect(result).toBe(true);
    });
  });
  describe("isSameDay", () => {
    it("should return true if date is equal", () => {
      const result = isSameDay(new Date("2022-07-30"), new Date("2022-07-30"));
      expect(result).toBe(true);
    });
  });
});
//# sourceMappingURL=dateUtils.test.js.map
