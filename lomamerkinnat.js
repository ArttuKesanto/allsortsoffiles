var lomamerkinnat = [
    {
    nimi: "Virtanen Matti", 
    alkupaiva: "2020-06-01", 
    loppupaiva: "2020-06-30",
    },
    {
    nimi: "Laaksonen Lisa", 
    alkupaiva: "2020-07-01", 
    loppupaiva: "2020-07-31",
    }, 
    {
    nimi: "Niemi Juha", 
    alkupaiva: "2020-06-01", 
    loppupaiva: "2020-06-14",
    }, 
    {
    nimi: "Lehtonen Erkki", 
    alkupaiva: "2020-08-01", 
    loppupaiva: "2020-08-31",
    } ];

    const listaus = lomamerkinnat.map(merkinnat =>
        {
            return (
                {
                    "Loma" : merkinnat.nimi + " loma alkaa " + merkinnat.alkupaiva + " ja päättyy " + merkinnat.loppupaiva
                }
            )
        }
    );

    console.log(listaus);