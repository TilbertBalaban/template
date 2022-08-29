export const validateAge = (age: number): string => {
  if (age < 0 || age > 150 || Number.isNaN(age)) {
    return 'Invalid';
  }
  return age < 18 ? 'You are too young' : 'You are an adult';
};
