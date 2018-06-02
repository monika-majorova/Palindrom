var QUnit = require('qunitjs'); // Načíst modul QUnit node.js module pro testování.
var test = QUnit.test; // Uložit kopii QUnit.test.
require('qunit-tap')(QUnit, console.log); // Použít console.log pro výstup testu.
var isPalindrome = require('./palindrom.js'); // Načást soubor palindrom.js.

function testPalindrome(palindrome, expectedResult) {
  assert.equal(isPalindrome(palindrome), expectedResult);
}

test('Testování funkce vyhodnocující, zda jde o palindrom', function(assert) {
  testPalindrome("aaa", true);
});

test('Testování funkce vyhodnocující, zda jde o palindrom. Tento test by měl selhat', function(assert) {
  testPalindrome("abc", true);
});

QUnit.load(); // Spustit testy.
