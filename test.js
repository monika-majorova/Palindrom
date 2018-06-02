var QUnit = require('qunitjs'); // Načíst modul QUnit node.js module pro testování.
var test = QUnit.test; // Uložit kopii QUnit.test.
require('qunit-tap')(QUnit, console.log); // Použít console.log pro výstup testu.
var isPalindrom = require('./palindrom.js'); // Načást soubor palindrom.js.

test('Testování funkce vyhodnocující, zda jde o palindrom', function(assert) {
  var input = "aaa";
  var result = isPalindrome(input);
  var expected = true;
  assert.equal(result, expected);
});

QUnit.load(); // Spustit testy.
