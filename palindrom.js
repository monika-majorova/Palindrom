/**
Zjistí, zda je text palindrom (true) nebo není (false).
*/
function jePalindrom(vstupniText, chJakoJedenZnak) {
	var text = odstranDiakritiku(vstupniText);
	text = odstranNealfanumerickeZnaky(text);
	text = text.toLowerCase();
	if (text === "") {
		return null; // Pokud nám po úpravách nezbyl žádný text (nebyly zadány žádné znaky A-ž či 0-9), není co kontrolovat.
	}
	if (chJakoJedenZnak) {
		text = text.replace(/ch/g, "_"); // Úpravou "ch" na "_" jednoduše zajistíme zpracování "ch" jako jednoho znaku. Znak "_" (ani jiný obdobný znak) se v tuto chvíli již v textu nevyskytuje, od této chvíle to tedy může být jedině "ch".
	}
	var obracenyText = obratText(text);
	return obracenyText === text;
}

/**
Odstraní diakritiku z textu.
*/
function odstranDiakritiku(text) {
	// Znak z první proměnné bude nahrazen znakem z druhé proměnné na stejné pozici. Pouhou úpravou těchto seznamů lze případně zajistit odstranění diakritiky z dalších znaků / jazyků.
	var znakySDiakritikou	= "áäčçďéěëíĺľňóôőöřŕšťúůűüýžÁÄČÇĎÉĚËÍĹĽŇÓÔŐÖŘŔŠŤÚŮŰÜÝŽ";
	var znakyBezDiakritiky	= "aaccdeeeillnoooorrstuuuuyzAACCDEEEILLNOOOORRSTUUUUYZ";
	
	var vysledek = "";
	var poziceZnakuVSeznamu = -1; // Pozice aktuálního znaku v seznamu znakySDiakritikou. Pokud se tam nevyskytuje, je zde -1.
	for (i = 0; i < text.length; i++) {
		poziceZnakuVSeznamu = znakySDiakritikou.indexOf(text.charAt(i));
		if (poziceZnakuVSeznamu != -1) {
			// Pokud je znak nalezen v seznamu znakySDiakritikou, nahraď ho odpovídajícím znakem ze seznamu znakyBezDiakritiky
			vysledek += znakyBezDiakritiky.charAt(poziceZnakuVSeznamu);
		} else {
			// Pokud není znak nalezen, nenahrazuj
			vysledek += text.charAt(i);
		}
	}
	return vysledek;
}

/**
Odstraní z textu vše krom malých a velkých písmen anglické abecedy (A-Z, a-z) a arabských číslic (0-9).
*/
function odstranNealfanumerickeZnaky (text) {
	return text.replace(/[^A-Za-z0-9]/g, "");
}

/**
Otočí text (reverze).
*/
function obratText(text) {
	return text.split("").reverse().join("");
}

// Zajištění možnosti spouštění testů přes Travis CI / Node.js.
if (typeof module !== 'undefined') {
	module.exports = {
		jePalindrom: jePalindrom,
		odstranDiakritiku: odstranDiakritiku,
		odstranNealfanumerickeZnaky: odstranNealfanumerickeZnaky,
		obratText: obratText
		};
}