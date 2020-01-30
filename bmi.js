const laskeBMI = (paino, pituus) => {
    let painoindeksi = paino / (pituus * pituus);
    return painoindeksi;
}

let paino = 90;
let pituus = 1.72;

let bmiLaskettu = laskeBMI(paino, pituus);
console.log("Painoindeksi on " + bmiLaskettu.toFixed(1) + " kun paino on " + paino + " ja pituus on " + pituus);

if (bmiLaskettu <= 18.5) {
    console.log("Alipaino")
}

else if (bmiLaskettu > 18.5 && bmiLaskettu <= 25.0) {
    console.log("Normaali paino")
}

else {
    console.log("Ylipaino");
}

const kerroMerkitys = (bmiLaskettu) => {
    if (bmiLaskettu <= 18.5) {
        console.log("Alipaino")
    }
    
    else if (bmiLaskettu > 18.5 && bmiLaskettu <= 25.0) {
        console.log("Normaali paino")
    }
    
    else {
        console.log("Ylipaino");
    }
}

kerroMerkitys();


const laskeKilometrikorvaus = (ajetutkilometrit, kilometrikorvaus = 0.43) => {
    let compensation = ajetutkilometrit * kilometrikorvaus;
    return compensation; 
}

ajetutkilometrit = 100;

let compensation1 = laskeKilometrikorvaus(100);
console.log("Korvaus on " + compensation1.toFixed(2) + " kun ajettu matka on " + ajetutkilometrit);