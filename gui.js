function init() {
	document.getElementsByTagName("h1")[0].innerHTML += "<span id=\"dodatek_nadpisu\">mordnilaP</span>";
	if (jeCssVlastnostPodporovana("backgroundClip", "text")) {
		document.getElementById("dodatek_nadpisu").style.cssText = "background: linear-gradient(to right, #dddddd, #fafafa); background-clip: text; color: transparent;";
	}
}

function smallTest() {
	if (typeof jePalindrom === 'undefined') {
		document.getElementById("vysledekTestu").innerHTML = "<span class=\"neuspech\">Nepodařilo se načíst funkci pro kontrolu palindromů</span>";
	} else if (jePalindrom("abc") === false && jePalindrom("aaa") === true) {
		document.getElementById("vysledekTestu").innerHTML = "<span class=\"uspech\">Vyhodnocování palindromů funguje.</span>";
	} else {
		document.getElementById("vysledekTestu").innerHTML = "<span class=\"neuspech\">Vyhodnocování palindromů nepracuje správně.</span>";
	}
}

function vyhodnotText() {
	var text = document.palindromVstup.palindromText.value;
	if (palindromVstup.coRadekToText.checked) {
		var texty = text.split("\n");
		document.getElementById("vysledek").innerHTML = "";
		for(var i = 0; i < texty.length; i++) {
			document.getElementById("vysledek").innerHTML += hodnoceniTextu(texty[i]) + (i < texty.length - 1 ? "<br>\n" : "");
		}
	} else {
		document.getElementById("vysledek").innerHTML = hodnoceniTextu(text);
	}
}

function hodnoceniTextu(text) {
	var vysledek = jePalindrom(text);
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

function textareaOdesilac(event) {
	if (event.key == "Enter" && event.ctrlKey) {
		vyhodnotText();
	}
}