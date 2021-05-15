import Validator from '../validator';

test('valid1', () => {
    const result = Validator.validateUsername('2fgl3b4');
    expect(result).toBe(true);
});


test('valid2', () => {
    const result = Validator.validateUsername('2b77772');

    expect(result).toBe(false);
});

test('valid3', () => {
    const result = Validator.validateUsername('b2fgl3b4');

    expect(result).toBe(false);
});