import { DATE_UNIT_TYPES } from "../constants";
import { getCurrentYear, add, isWithinRange } from "../dateUtils";

describe("Date Utils", () => {
  
  it('should return current year', () => {
    const result = getCurrentYear();
    expect(result).toBe(2022);
  })

  it('should add to the date correctly', () => {
    const result = add(new Date('2019-06-11'), 2);
    expect(result).toStrictEqual(new Date('2019-06-13'));
  })

  it('should return true if date is within given range, else false', () => {
    const result = isWithinRange(new Date('2022-07-30'),new Date('2022-01-01'),new Date('2023-01-01'))
    expect(result).toBe(true);
  })
});
