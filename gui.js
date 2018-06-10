function init() {
	document.getElementsByTagName("h1")[0].innerHTML += "<span id=\"dodatek_nadpisu\">mordnilaP</span>";
	if (jeCssVlastnostPodporovana("backgroundClip", "text")) {
		document.getElementById("dodatek_nadpisu").style.cssText = "background: linear-gradient(to right, #dddddd, #fafafa); background-clip: text; color: transparent;";
	}
}

function testAplikace(elementProVysledekTestu) {
	if (typeof jePalindrom === 'undefined') {
		elementProVysledekTestu.innerHTML = "<span class=\"neuspech\">Nepodařilo se načíst funkci pro kontrolu palindromů</span>";
	} else if (jePalindrom("abc") === false && jePalindrom("aaa") === true) {
		elementProVysledekTestu.innerHTML = "<span class=\"uspech\">Vyhodnocování palindromů funguje.</span>";
	} else {
		elementProVysledekTestu.innerHTML = "<span class=\"neuspech\">Vyhodnocování palindromů nepracuje správně.</span>";
	}
}

function vyhodnotCelyText(text, coRadekToText, elementProVysledek, chJakoJedenZnak) {
	if (coRadekToText) {
		var texty = text.split("\n");
		elementProVysledek.innerHTML = "";
		for(var i = 0; i < texty.length; i++) {
			elementProVysledek.innerHTML += vyhodnotText(texty[i], chJakoJedenZnak) + (i < texty.length - 1 ? "<br>\n" : "");
		}
	} else {
		elementProVysledek.innerHTML = vyhodnotText(text, chJakoJedenZnak);
	}
}

function vyhodnotText(text, chJakoJedenZnak) {
	var vysledek = jePalindrom(text, chJakoJedenZnak);
	if (vysledek === null) {
		return "<span class=\"varovani\">Nebyl zadán žádný platný text.</span>";
	} else {
		return vysledek ? "<span class=\"uspech\">Jedná se o palindrom.</span>" : "<span class=\"neuspech\">Toto není palindrom.</span>";
	}
}

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

function textareaOdesilac(event, text, coRadekToText, elementProVysledek, chJakoJedenZnak) {
	if (event.key == "Enter" && event.ctrlKey) {
		vyhodnotCelyText(text, coRadekToText, elementProVysledek, chJakoJedenZnak);
	}
}