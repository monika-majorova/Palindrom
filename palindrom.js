/**
Zjistí, zda je text palindrom (true) nebo není (false).
*/
function jePalindrom(vstupniText) {
	var text = odstranDiakritiku(vstupniText);
	text = odstranNealfanumerickeZnaky(text);
	text = text.toLowerCase();
	var obracenyText = obratText(text);
	return obracenyText === text;
}

/**
Odstraní diakritiku z textu.
*/
function odstranDiakritiku(text) {
	var znakySDiakritikou	= "áäčçďéěëíĺľňóôőöřŕšťúůűüýžÁÄČÇĎÉĚËÍĹĽŇÓÔŐÖŘŔŠŤÚŮŰÜÝŽ";
	var znakyBezDiakritiky	= "aaccdeeeillnoooorrstuuuuyzAACCDEEEILLNOOOORRSTUUUUYZ";
	
	var vysledek = "";
	var poziceZnakuVSeznamu = -1;
	for (i = 0; i < text.length; i++) {
		poziceZnakuVSeznamu = znakySDiakritikou.indexOf(text.charAt(i));
		if (poziceZnakuVSeznamu != -1) {
			// Pokud je znak nalezen v seznamu znakySDiakritikou, nahraď ho odpovídajícím znakem ze seznamu znakyBezDiakritiky
			vysledek += znakyBezDiakritiky.charAt(poziceZnakuVSeznamu);
		} else {
			// Pokud není znak nalezen, nenahrazuj
			vysledek += text.charAt(i);
		}
		return vysledek;
	}
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

module.exports = {jePalindrom, odstranDiakritiku, odstranNealfanumerickeZnaky, obratText};  // allows CommonJS/Node.js require()
