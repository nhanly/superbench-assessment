import { AvatarNamePipe } from './avatarName.pipe';

describe('AvatarNamePipe', () => {
  const pipe = new AvatarNamePipe();

  it('transforms "null" to ""', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('transforms "John" to "J"', () => {
    expect(pipe.transform('John')).toBe('J');
  });

  it('transforms "John Roberts" to "JR"', () => {
    expect(pipe.transform('John Roberts')).toBe('JR');
  });

  it('transforms "john roberts" to "JR"', () => {
    expect(pipe.transform('john roberts')).toBe('JR');
  });

  it('transforms "John Roberts Langdon" to "JR"', () => {
    expect(pipe.transform('John Roberts Langdon')).toBe('JR');
  });
});
