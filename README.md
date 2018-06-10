# Palindrom
Webová klientská aplikace, která zjistí, zda zadaný řetězec je palindrom nebo ne.
Aplikace je dostupná na této adrese: https://monika-majorova.github.io/Palindrom/ - stačí zadat palindrom do příslušného políčka a stisknout tlačítko Vyhodnotit text.

Aplikace vyhodnocuje, zda zadaný text je nebo není palindrom, přičemž nebere v úvahu velikost písmen, diakritiku ani jiné znaky než písmena (A-ž) a čísla (0-9). Zadaný text se nikam neposílá, je vyhodnocen přímo v prohlížeči. Vyhodnocování dlouhých textů (např. 1 000 000 znaků) může několik sekund trvat a prohlížeč může na chvíli "zamrznout", v závislosti na výkonu počítače a prohlížeče.

Zadejte text k vyhodnocení do políčka a stiskněte tlačítko **Vyhodnotit text**.

Pokud je zaškrtnuta volba **Co řádek to samostatný text k vyhodnocení**, vyhodnocuje se každý řádek zvlášť, v opačném případě se vyhodnocuje celý obsah políčka najednou.

Pokud je zaškrtnuta volba **Písmeno ch jako jeden znak**, uvažuje se písmeno *ch* jako jeden znak, tedy podle české abecedy. V takovém případě je např. slovo "nepochopen" vyhodnoceno správně jako palindrom, pokud je tato volba vypnuta, uvažuje se *ch* jako dvě písmena, což je vhodnější pro vyhodnocování cizojazyčných textů. 