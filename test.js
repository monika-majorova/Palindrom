var QUnit = require('qunitjs'); // Načíst modul QUnit node.js module pro testování.
var test = QUnit.test; // Uložit kopii QUnit.test.
require('qunit-tap')(QUnit, console.log); // Použít console.log pro výstup testu.
var jePalindrom = require('./palindrom.js'); // Načíst soubor palindrom.js.

// Testy pro odstranDiakritiku():
test('Testování funkce pro odstranění diakritiky 1', function(assert) {
  assert.equal(odstranDiakritiku("áčďéěíňóřšťúůýž"), "acdeeinorstuuyz");
});

test('Testování funkce pro odstranění diakritiky 2', function(assert) {
  assert.equal(odstranDiakritiku("ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ"), "ACDEEINORSTUUYZ");
});

test('Testování funkce pro odstranění diakritiky 3', function(assert) {
  assert.equal(odstranDiakritiku("Příliš žluťoučký kůň úpěl ďábelské kódy."), "Prilis zlutoucky kun upel dabelske kody.");
});

test('Testování funkce pro odstranění diakritiky 4', function(assert) {
  assert.equal(odstranDiakritiku("PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ KÓDY."), "PRILIS ZLUTOUCKY KUN UPEL DABELSKE KODY.");
});

// Testy pro odstranNealfanumerickeZnaky():
test('Testování funkce pro odstranění nealfanumerických znaků 1', function(assert) {
  assert.equal(odstranDiakritiku("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
});

test('Testování funkce pro odstranění nealfanumerických znaků 2', function(assert) {
  assert.equal(odstranDiakritiku("Příliš žluťoučký kůň úpěl ďábelské kódy."), "Pliluoukkplbelskkdy");
});

// Testy pro obratText():
test('Testování funkce pro obrácení (reverzi) textu 1', function(assert) {
  assert.equal(odstranDiakritiku("ABCDEabcde0123456789"), "9876543210edcbaEDCBA");
});

test('Testování funkce pro obrácení (reverzi) textu 2', function(assert) {
  assert.equal(odstranDiakritiku("Příliš žluťoučký kůň úpěl ďábelské kódy."), ".ydók ékslebáď lěpú ňůk ýkčuoťulž šilířP");
});

// Testy pro jePalindrom():
test('Testování funkce vyhodnocující, zda jde o palindrom 1', function(assert) {
  assert.equal(jePalindrom("aaa"), true);
});

test('Testování funkce vyhodnocující, zda jde o palindrom 2', function(assert) {
  assert.equal(jePalindrom("abc"), false);
});

QUnit.load(); // Spustit testy.
