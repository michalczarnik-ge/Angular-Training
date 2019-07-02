import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null;
  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return formatted value when passed UTC date string', () => {
    const dateString = 'Tue Nov 20 2018 07:40:47 GMT+0100 (Central European Standard Time)';
    const input = pipe.transform(dateString);
    const output = /listopada/;
    expect(input).toMatch(output);
  });

  it('should  return null when passed a falsy values', () => {
    expect(pipe.transform('')).toEqual(null);
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(null);
  });
});
