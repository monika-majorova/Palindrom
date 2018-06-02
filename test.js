test('Testování funkce vyhodnocující, zda jde o palindrom', function(assert) {
  var input = "aaa";
  var result = isPalindrome(input);
  var expected = true;
  assert.equal(result, expected);
});
