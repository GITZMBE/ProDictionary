import { describe, expect, test } from 'vitest';
import { displayQuery } from '../src/utils/displayQuery';

describe('displayQuery', () => {
  test('should replace underscores with spaces and trim the string', () => {
    expect(displayQuery('multiple_words_query')).toBe('multiple words query');
    expect(displayQuery(' leading_and_trailing_underscores_ ')).toBe('leading and trailing underscores');
    expect(displayQuery('single_word')).toBe('single word');
    expect(displayQuery('')).toBe('');
    expect(displayQuery('word_with_multiple___underscores')).toBe('word with multiple   underscores');
  });

  test('should handle strings with no underscores', () => {
    expect(displayQuery('singleword')).toBe('singleword');
    expect(displayQuery('multiple words')).toBe('multiple words');
  });

  test('should handle strings that are already clean', () => {
    expect(displayQuery('clean query')).toBe('clean query');
  });
});
