import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  test('should capitalize a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize an uppercase string', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('should handle mixed-case strings', () => {
    expect(capitalize('hElLo')).toBe('Hello');
  });

  test('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(capitalize(123)).toBe('123');
    //expect(capitalize(null)).toBe('');
    //expect(capitalize(undefined)).toBe('');
  });
});