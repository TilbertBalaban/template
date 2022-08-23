import { validateAge } from '../../../utils/functions/validateAge';

describe(
  'validateAge',
  () => {
    test('middle values', () => {
      expect(validateAge(14)).toBe('You are too young');
      expect(validateAge(24)).toBe('You are an adult');
    });
    test('corner values', () => {
      expect(validateAge(0)).toBe('You are too young');
      expect(validateAge(17)).toBe('You are too young');
      expect(validateAge(18)).toBe('You are an adult');
      expect(validateAge(100)).toBe('You are an adult');
    });
    test('incorrect values', () => {
      expect(validateAge(-5)).toBe('Invalid');
      expect(validateAge(50000)).toBe('Invalid');
      expect(validateAge(NaN)).toBe('Invalid');
    });
  },
);
