const sum = require('./');

test('brain teasers', () => {
  // Fill the to answers with true or false
  // expect([] == ![]).toBe(true); or expect([] == ![]).toBe(false);
  expect([] == ![]).toBe();
  expect(true == []).toBe();
  expect(true == ![]).toBe();
  expect(false == ![]).toBe();
  
  expect(!!"false" == !!"true").toBe();
  expect(!!"false" === !!"true").toBe();

  expect("b" + "a" + + "a" + "a").toBe();
  
  // Comparing null to 0
  expect(null == 0).toBe();
  expect(null > 0).toBe();
  expect(null >= 0).toBe();
  
  // Comparison of three numbers
  expect(1 < 2 < 3).toBe();
  expect(3 > 2 > 1).toBe();


  expect([10, 1, 3].sort()).toBe([]);
  expect(!![]).toBe();
  expect([]).toBe();
  expect([1, 2, 3] + [4,5,6]).toBe();
  

  expect(NaN === NaN).toBe();
  
});