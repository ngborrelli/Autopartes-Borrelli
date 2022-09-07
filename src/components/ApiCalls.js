export const getArticulos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(
                [
                    {
                        "categoria": "suspensión",
                        "id": "996170",
                        "titulo": "Amortiguador de aire de suspensión trasero Porsche Cayenne 2005 U54",
                        "stock": 23,
                        "descuento": 0,
                        "precio": 14889,
                        "descripcion": "Amortiguador de aire trasero, izquierdo o derecho. Incluye bolsa, base y ADS. Aplica para los siguientes modelos: Porsche Cayenne 2003-2010, Volkswagen Touareg 2004-2010, Audi Q7 2007-2015",
                        "imagen1": "../assets/images/1_1.jpg"
                      },
                      {
                        "categoria": "suspensión",
                        "id": 996171,
                        "titulo": "Par de bolsas de aire suspensión trasera Porsche Cayenne 2015",
                        "stock": 18,
                        "descuento": 5,
                        "precio": 15799,
                        "descripcion": "Par de bolsas de aire de suspensión trasera derecha para Audi, Porsche y Volkswagen. Aplica para los siguientes modelos: Audi Q7 2011-2016, Porsche Cayenne 2011-2016, Volkswagen Touareg 2011-2016",
                        "imagen1": "2_1.jpg"
                      },
                      {
                        "categoria": "suspensión",
                        "id": 996172,
                        "titulo": "Bolsa de aire de suspensión delantera Porsche Cayenne 2006",
                        "stock": 33,
                        "descuento": 0,
                        "precio": 7799,
                        "descripcion": "Bolsa de aire de suspensión delantera izquierda o derecha. Aplica para los siguientes modelos: Audi Q7 2007-2015, Porsche Cayenne 2003-2010, Volkswagen Touareg 2004-2010",
                        "imagen1": "3_1.jpg"
                      },
                      {
                        "categoria": "suspensión",
                        "id": 996173,
                        "titulo": "Par de amortiguadores de aire delanteros Porsche Macan 2015 U45",
                        "stock": 6,
                        "descuento": 0,
                        "precio": 59598,
                        "descripcion": "Par de amortiguadores de aire de suspensión delanteros izquierdo y derecho. Aplica para los siguientes modelos: Audi A8 2011-2016, Porsche Macan 2015-2017",
                        "imagen1": "4_1.jpg"
                      }
                ])
            }
        , 2000);

        })
        return task;
    };
