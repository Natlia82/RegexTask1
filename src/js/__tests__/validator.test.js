import Validator from '../validator';

test('validRight', () => {
    const result = Validator.validateUsername('test123test');
    expect(result).toBe(true);
});


test('repeatedNumbers', () => {
    const result = Validator.validateUsername('1test2');

    expect(result).toBe(false);
});

test('notTheFirstNumber', () => {
    const result = Validator.validateUsername('_test');

    expect(result).toBe(false);
});

test('containsAnUnderscore', () => {
    const result = Validator.validateUsername('te_st');
    expect(result).toBe(true);
});

test('containsAHyphen', () => {
    const result = Validator.validateUsername('test-');
    expect(result).toBe(false);
});