// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');
// First two tests pass, second two fail for each function
//Phone # tests
test('696-669-9969', () => {
    expect(functions.isPhoneNumber("696-669-9969")).toBe(true);
  });
test('696-659-9969', () => {
    expect(functions.isPhoneNumber("696-659-9969")).toBe(true);
  });
test('69.6669+9969', () => {
    expect(functions.isPhoneNumber("69.669+9969")).toBe(true);
  });
test('696-669.9969', () => {
    expect(functions.isPhoneNumber("696-669.9969")).toBe(true);
  });


//email tests
test('mruddy@ucsd.edu', () => {
  expect(functions.isEmail("mruddy@ucsd.edu")).toBe(true);
});
test('tbrady@ucsd.edu', () => {
    expect(functions.isEmail("tbrady@ucsd.edu")).toBe(true);
});
test('mruddy.ucsd.edu', () => {
    expect(functions.isEmail("mruddy.ucsd.edu")).toBe(true);
});
test('mruddy@ucsd@edu', () => {
    expect(functions.isEmail("mruddy@ucsd@edu")).toBe(true);
});




//Password Tests
test('PassWord', () => {
    expect(functions.isStrongPassword("PassWord")).toBe(true);
  });
test('PassW', () => {
    expect(functions.isStrongPassword("PassW")).toBe(true);
  });
test('1pass', () => {
    expect(functions.isStrongPassword("1pass")).toBe(true);
  });
test('pa', () => {
    expect(functions.isStrongPassword("pa")).toBe(true);
  });




//Date Tests
test('12/28/2001', () => {
    expect(functions.isDate("12/28/2001")).toBe(true);
  });
test('12/28/2022', () => {
    expect(functions.isDate("12/28/2022")).toBe(true);
  });
test('12.28/2001', () => {
    expect(functions.isDate("12.28/2001")).toBe(true);
  });
test('12/28/01', () => {
    expect(functions.isDate("12/28/01")).toBe(true);
  });




//Hex Color Tests
test('ABC', () => {
    expect(functions.isHexColor("ABC")).toBe(true);
  });
test('000ABC', () => {
    expect(functions.isHexColor("000ABC")).toBe(true);
  });
test('ABCD', () => {
    expect(functions.isHexColor("ABCD")).toBe(true);
  });
test('0ABC0', () => {
    expect(functions.isHexColor("0ABC0")).toBe(true);
  });




// TODO - Part 2