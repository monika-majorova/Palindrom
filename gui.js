/**
Inicializace GUI (přidá k nadpisu obrácený nadpis a nastyluje ho - vypadá to zajímavě). Tuto funkci je třeba zavolat nejlépe z tagu body, atributu onload.
*/
function init() {
	document.getElementsByTagName("h1")[0].innerHTML += "<span id=\"dodatek_nadpisu\">mordnilaP</span>"; // Obrácený nadpis je připojen až zde skriptem, aby to nemátlo vyhledávače.
	if (jeCssVlastnostPodporovana("backgroundClip", "text")) {
		// Zde je s podmínkou použit styl, který funguje pravděpodobně jen v prohlížečích založených na jádru Firefoxu (jádro Chrome pravděpodobně neumí background-clip: text).
		document.getElementById("dodatek_nadpisu").style.cssText = "background: linear-gradient(to right, #dddddd, #fafafa); background-clip: text; color: transparent;";
	}
}

/**
Provede jednoduchý test, zda aplikace vyhodnocuje palindromy správně. Odhalí např. nepřítomnost palindrom.js, neodhalí ale všechny případné chyby - na to je tu skript test.js.
*/
function testAplikace(elementProVysledekTestu) {
	if (typeof jePalindrom === 'undefined') {
		elementProVysledekTestu.innerHTML = "<span class=\"neuspech\">Nepodařilo se načíst funkci pro kontrolu palindromů.</span>";
	} else if (jePalindrom("abc") === false && jePalindrom("aaa") === true) {
		elementProVysledekTestu.innerHTML = "<span class=\"uspech\">Vyhodnocování palindromů funguje.</span>";
	} else {
		elementProVysledekTestu.innerHTML = "<span class=\"neuspech\">Vyhodnocování palindromů nepracuje správně.</span>";
	}
}

/**
Vyhodnotí celý text z políčka a výsledek zobrazí v daném elementu.
*/
function vyhodnotCelyText(text, coRadekToText, elementProVysledek, chJakoJedenZnak) {
	if (coRadekToText) {
		// Je nastaveno, že se má každý řádek vyhodnotit zvlášť.
		var texty = text.split("\n");
		elementProVysledek.innerHTML = "";
		for(var i = 0; i < texty.length; i++) {
			// Při výpisu výsledků pro více samostatně vyhodnocovaných řádků doplníme pro přehlednost před výsledek vyhodnocovaný text (případně zkrácený na 18 znaků, což je délka, při které se text složený ze samých "W" (pravděpodobně nejširší znak) ještě nezalomí, a je tak každý výsledek na jednom řádku) a za výsledkem odřádkujeme, pokud není poslední.
			elementProVysledek.innerHTML += (texty[i] !== "" ? zkratText(texty[i], 18, "...") + ": " : "")
				+ vyhodnotText(texty[i], chJakoJedenZnak)
				+ (i < texty.length - 1 ? "<br>\n" : "");
		}
	} else {
		// Je nastaveno, že se má celý text vyhodnotit jako celek.
		elementProVysledek.innerHTML = vyhodnotText(text, chJakoJedenZnak);
	}
}

/**
Vyhodnotí jeden text a vrátí zprávu pro výpis do GUI.
*/
function vyhodnotText(text, chJakoJedenZnak) {
	var vysledek = jePalindrom(text, chJakoJedenZnak);
	if (vysledek === null) {
		return "<span class=\"varovani\">Nebyl zadán žádný platný text.</span>";
	} else {
		return vysledek ? "<span class=\"uspech\">Jedná se o palindrom.</span>" : "<span class=\"neuspech\">Toto není palindrom.</span>";
	}
}

/**
Vyhodnotí, zda je daná CSS vlastnost v prohlížeči podporována, volitelně umí vyhodnotit také, zda daná vlastnost podporuje konkrétní hodnotu.
*/
function jeCssVlastnostPodporovana(vlastnost, hodnota) {
	if (vlastnost in document.body.style) {
		if (typeof hodnota !== 'undefined' && hodnota !== null) {
			var element = document.createElement('div');
			element.style[vlastnost] = hodnota;
			return element.style[vlastnost] === hodnota; // Vrátíme, zda prohlížeč podporuje tuto hodnotu u této vlastnosti.
		} else {
			return true; // Vlastnost je podporována, hodnotu nekontrolujeme.
		}
	} else {
		return false; // Vlastnost není podporována.
	}
}

/**
Zajistí odeslání textového políčka pomocí kláves CTRL + Enter (jinak se odřádkuje). Tato funkce musí být volána z atributu onkeydown (nebo obdobného) na daném políčku.
*/
function textareaOdesilac(event, text, coRadekToText, elementProVysledek, chJakoJedenZnak) {
	if (event.key == "Enter" && event.ctrlKey) {
		vyhodnotCelyText(text, coRadekToText, elementProVysledek, chJakoJedenZnak);
	}
}

/**
Zkrátí text na požadovanou délku a případně připojí výpustku (daný řetězec na konec zkráceného textu).
*/
function zkratText(text, maxDelka, vypustka) {
	if (text.length <= maxDelka){
		return text;
	} else {
		return text.substring(0, maxDelka) + (typeof vypustka !== 'undefined' ? vypustka : "");
	}
}