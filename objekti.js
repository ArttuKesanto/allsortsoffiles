let matka = { id: 1,
    otsikko: 'Lomalla',
    paiva: '26.5.2019',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10', 
    kuvaus: 'Lomalla Lohjalla',
    };

    console.log("Otsikko: " + matka.otsikko);
    console.log("Paikka: " + matka.paikka);
    

    // matka.otsikko = "Lollero";  -- voisi muutta myös näin.

matka = {...matka, paiva: "20.01.2020"}; // toimii myös ''-merkinnöillä.
console.log("Uusi päivämäärä on " + matka.paiva);