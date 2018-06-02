var QUnit = require('qunitjs'); // Načíst modul QUnit node.js module pro testování.
var test = QUnit.test; // Uložit kopii QUnit.test.
require('qunit-tap')(QUnit, console.log); // Použít console.log pro výstup testu.
var isPalindrome = require('./palindrom.js'); // Načást soubor palindrom.js.

test('Testování funkce vyhodnocující, zda jde o palindrom', function(assert) {
  assert.equal(isPalindrome("aaa"), true);
});

test('Testování funkce vyhodnocující, zda jde o palindrom. Tento test by měl selhat', function(assert) {
  assert.equal(isPalindrome("abc"), true);
});

QUnit.load(); // Spustit testy.
