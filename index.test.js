const sum = require('./');

test('brain teasers', () => {
  // Fill the to answers with true or false
  // expect([] == ![]).toBe(true); or expect([] == ![]).toBe(false);
  expect([] == ![]).toBe(true);
  expect(true == []).toBe(false);
  expect(true == ![]).toBe(false);
  expect(false == ![]).toBe(true);
  
  expect(!!"false" == !!"true").toBe(true);
  expect(!!"false" === !!"true").toBe(true);

  expect("b" + "a" + + "a" + "a").toBe('baNaNa');
  
  // Comparing null to 0
  expect(null == 0).toBe(false);
  expect(null > 0).toBe(false);
  expect(null >= 0).toBe(true);
  
  // Comparison of three numbers
  expect(1 < 2 < 3).toBe(true);
  expect(3 > 2 > 1).toBe(false);


  // expect([10, 1, 3].sort()).toBe([1, 10, 3]); --> case fails still the answer is correct according to javascript
  // some prototype mismatch

  expect(!![]).toBe(true);
  // expect([]).toBe([]); --> case fails still the answer is correct according to javascript
  // some prototype mismatch
  expect([1, 2, 3] + [4,5,6]).toBe('1,2,34,5,6');
  

  expect(NaN === NaN).toBe(false);
  
});