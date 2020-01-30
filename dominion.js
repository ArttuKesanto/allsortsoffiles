const laskePisteet = (laani, kirous, tila, pitaja) => { // Ei tarvitse tehdä type = "javascript", yms...
    let yhteispisteet = laani * 6 + kirous * (-1) + tila * 2 + laani * 6;
    return yhteispisteet;
}

let pisteet = laskePisteet(0, 0, 0, 0); // LET-sana tarkoittaa, että muuttuja ei ole olemassa enää kaarisulkujen jälkeen {}. Tietty esiintymislohko.

let results2 = laskePisteet(2, 0, 0, 0);

console.log("Yhteispisteet ovat " + pisteet);
console.log("Yhteispisteet ovat " + results2);

// uusi funktio:


const laskeNettopalkka = (bruttopalkka, veroprosentti, tvmaksu = 0.0150, tevmaksu = 0.0675) => {
    let salaryReal = bruttopalkka - (bruttopalkka * (veroprosentti / 100) + bruttopalkka * tvmaksu + bruttopalkka * tevmaksu);
    return salaryReal;
}

let salary1 = laskeNettopalkka(3000, 20);
let salary2 = laskeNettopalkka(4000, 27.5);

console.log("Nettopalkka on " + salary1 + " kun palkka on 3000 ja veroprosentti 20");
console.log("Nettopalkka on " + salary2 + " kun palkka on 4000 ja veroprosentti 27.5");

if (salary1 > 2000) { // omaa testausta.
    console.log("Jees!");
}

else {
    console.log("Nope!");
}