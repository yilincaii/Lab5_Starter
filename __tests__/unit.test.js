// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//
// isPhoneNumber

test('valid phone number: 123-456-7899', () => {
  expect(isPhoneNumber('123-456-7899')).toBe(true);
});

test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number: 1234567898', () => {
  expect(isPhoneNumber('1234567898')).toBe(false);
});

test('invalid phone number: cab-def-fhij', () => {
  expect(isPhoneNumber('cab-def-fhij')).toBe(false);
});

//
// isEmail
//
test('valid email: test@gmail.com', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('valid email: user@hire.org', () => {
  expect(isEmail('user@hire.org')).toBe(true);
});

test('invalid email: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

test('invalid email: user@a', () => {
  expect(isEmail('user@a')).toBe(false);
});

//
// isStrongPassword
test('valid password: abc177', () => {
  expect(isStrongPassword('abc177')).toBe(true);
});

test('valid password: A_good_pasword1', () => {
  expect(isStrongPassword('A_good_pasword1')).toBe(true);
});

test('invalid password: 1abc', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('invalid password: ac', () => {
  expect(isStrongPassword('ac')).toBe(false); 
});

//
// isDate

test('valid date: 1/1/2020', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date: 2020/01/01', () => {
  expect(isDate('2020/01/01')).toBe(false);
});

test('invalid date: 1-1-2020', () => {
  expect(isDate('1-1-2020')).toBe(false);
});

//  5. isHexColor

test('valid hex: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex: 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(true);
});

test('invalid hex: #ff', () => {
  expect(isHexColor('#ff')).toBe(false);
});

test('invalid hex: #12345g', () => {
  expect(isHexColor('#12345g')).toBe(false); 
});
