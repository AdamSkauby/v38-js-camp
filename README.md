1.  const isMember = true; Används för att förhindra omtilldelning.
    let shipping = 79; Används när omtilldelning skall tillåtas, ex.vis räknare, rabattsatser.

2.  console.log(shipping); Här returneras 0, eftersom värdet på shipping ändrats till 0 (pga att isMember är sant, och därmed ingen frakt).

3.  if(isMember === true) { Här testas om isMember är true (boolskt true).
    shipping = 0;
    }

A. Vad är skillnaden mellan deklaration och anrop av en funktion? Deklaration görs en gång, för att beskriva stegen som funktionen skall utföra,
att anropa funktionen kan göras flera gånger och innebär att funktionen körs.

B. Varför börjar array-index på 0? Enklast att räkna då, genom att arrayen börjar på 0, så är alla poster förutom den första en offset till 0.

C. Vad betyder undefined när du läser cities[99]? Du hamnar utanför arrayen eftersom den bara har 3 poster, och du alltså inte är på någon
definierad post.
