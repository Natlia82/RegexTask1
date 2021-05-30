import Validator from '../validator';

test('validRight', () => {
    const result = Validator.validateUsername('2fgl3b4');
    expect(result).toBe(true);
});


test('repeatedNumbers', () => {
    const result = Validator.validateUsername('2b77772');

    expect(result).toBe(false);
});

test('notTheFirstNumber', () => {
    const result = Validator.validateUsername('b2fgl3b4');

    expect(result).toBe(false);
});

test('containsAnUnderscore', () => {
    const result = Validator.validateUsername('_2fg_l3b4');
    expect(result).toBe(true);
});

test('containsAHyphen', () => {
    const result = Validator.validateUsername('2fgl3b4-');
    expect(result).toBe(true);
});