//------------------------------------------------------------------------------
export const gettablaCategorias = () => {
  const task = new Promise((resolve, reject) => {
    setTimeout(
        () => {
            resolve(
              tablaCategorias
              )
        }
    , 1000);

    })
    return task;
};

export const getArticulos = (categoria) => {
    const task = new Promise((resolve, reject) => {
        setTimeout(
            (cat) => {
                if (!cat || cat == "Todos") {
                  resolve(tablaAutopartes())
                }
                else {
                  resolve(tablaAutopartes().filter((item) => item.categoria === categoria))
                }
            }
        , 100, categoria);

        })
        return task;
    };

export const getArticulo = (id) => {
  const task = new Promise((resolve, reject) => {
      setTimeout(
          () => {
              resolve(
                tablaAutopartes().filter((item) => item.id == id)[0]
                )
          }
      , 1000);

      })
      return task;
  };

export const tablaCategorias = function() {
  const cat = [
    { numero:  0, titulo: "Todos" },
    { numero: 10, titulo: "Filtros" },
    { numero: 20, titulo: "Frenos" },
    { numero: 30, titulo: "Inyección" },
    { numero: 40, titulo: "Suspensión" },
    { numero: 50, titulo: "Carrocería" },
  ]

    return cat;
}

export const tablaAutopartes = function() {
    const ape = [
      {
        "categoria": "40",
        "nroparte": 996170,
        "id": 996170,
        "titulo": "Amortiguador de aire de suspension trasero Porsche Cayenne 2005 U54",
        "stock": 23,
        "descuento": 0,
        "precio": 14889,
        "descripcion": "Amortiguador de aire trasero, izquierdo o derecho. Incluye bolsa, base y ADS. Aplica para los siguientes modelos: Porsche Cayenne 2003-2010, Volkswagen Touareg 2004-2010, Audi Q7 2007-2015",
        "imagen1": "1_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996171,
        "id": 996171,
        "titulo": "Par de bolsas de aire suspension trasera Porsche Cayenne 2015",
        "stock": 32500,
        "descuento": 5,
        "precio": 15799,
        "descripcion": "Par de bolsas de aire de suspension trasera derecha para Audi, Porsche y Volkswagen. Aplica para los siguientes modelos: Audi Q7 2011-2016, Porsche Cayenne 2011-2016, Volkswagen Touareg 2011-2016",
        "imagen1": "2_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996172,
        "id": 996172,
        "titulo": "Bolsa de aire de suspension delantera Porsche Cayenne 2006",
        "stock": 33,
        "descuento": 0,
        "precio": 7799,
        "descripcion": "Bolsa de aire de suspension delantera izquierda o derecha. Aplica para los siguientes modelos: Audi Q7 2007-2015, Porsche Cayenne 2003-2010, Volkswagen Touareg 2004-2010",
        "imagen1": "3_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 990173,
        "id": 990173,
        "titulo": "Par de amortiguadores de aire delanteros Porsche Macan 2015 U45",
        "stock": 6,
        "descuento": 0,
        "precio": 59598,
      "descripcion": "Par de amortiguadores de aire de suspension delanteros izquierdo y derecho. Aplica para los siguientes modelos: Audi A8 2011-2016, Porsche Macan 2015-2017",
        "imagen1": "4_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996173,
        "id": 996173,
        "titulo": "Bloque de valvulas de suspension Porsche Cayenne 2011",
        "stock": 14,
        "descuento": 0,
        "precio": 5799,
      "descripcion": "Bloque de valvulas de suspension para Audi, Porsche, Volkswagen. Aplica para los siguientes modelos: Audi Q7 2011-2015, Porsche Cayenne 2011-2015, Volkswagen Touareg 2011-2015",
        "imagen1": "5_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996174,
        "id": 996174,
        "titulo": "Bolsa de aire suspension delantera Porsche Panamera 2010-2014",
        "stock": 18,
        "descuento": 0,
        "precio": 10999,
        "descripcion": "Bolsa de aire de suspension delantera izquierda o derecha con sensor. Aplica para el siguiente modelo: Porsche Panamera 2010-2014",
      "imagen1": "6_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996175,
        "id": 996175,
        "titulo": "Base de amortiguador Porsche Cayenne 2005",
        "stock": 54,
        "descuento": 10,
        "precio": 349,
        "descripcion": "Base de amortiguador delantero o trasero, izquierdo o derecho. Aplica para los siguientes modelos: Audi Q7 2011-2015, Porsche Cayenne 2011-2015, Volkswagen Touareg 2011-2015",
        "imagen1": "7_1.jpg"
      },
      {
        "categoria": "40",
        "nroparte": 996176,
        "id": 996176,
        "titulo": "Bolsas de aire suspension delantera Porsche Panamera 2010-2014",
        "stock": 35,
        "descuento": 0,
        "precio": 21798,
        "descripcion": "Bolsa de aire suspension delantera, izquierda o derecha. Aplica para el siguiente modelo: Porsche Panamera 2010-2014",
        "imagen1": "8_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856177,
        "id": 856177,
        "titulo": "Filtro de aire para motor Porsche Panamera 2010-2016",
        "stock": 28,
        "descuento": 0,
        "precio": 699,
        "descripcion": "Filtro de aire para motor Porsche. Aplica para el siguiente modelo: Porsche Panamera 2010-2016",
        "imagen1": "9_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856178,
        "id": 856178,
        "titulo": "Filtro de aceite Porsche Boxster Cayman 2009-2016",
        "stock": 7,
        "descuento": 0,
        "precio": 359,
        "descripcion": "Filtro de aceite para Porsche. Aplica para los siguientes modelos: Porsche Boxster 2009-2016, Porsche Cayman 2009-2016",
        "imagen1": "10_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856179,
        "id": 856179,
        "titulo": "Filtro de aire de motor Porsche 911 2009-2012",
        "stock": 50,
        "descuento": 0,
        "precio": 899,
        "descripcion": "Filtro de aire de motor para Porsche. Aplica para el siguiente modelo: Porsche 911 2009-2012",
        "imagen1": "11_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856180,
        "id": 856180,
        "titulo": "Filtro de aire para Porsche Boxster o Cayman 2005-2012",
        "stock": 45,
        "descuento": 0,
        "precio": 839,
        "descripcion": "Filtro de aire para Porsche. Aplica para los siguientes modelos: Porsche Boxster 2005-2012, Porsche Cayman 2006-2012",
        "imagen1": "12_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856181,
        "id": 856181,
        "titulo": "Filtro de aceite Porsche 911 1995-1998",
        "stock": 57,
        "descuento": 0,
        "precio": 299,
        "descripcion": "Filtro de aceite para Porsche. Aplica para el siguiente modelo: Porsche 911 1995-1998",
        "imagen1": "13_1.jpg"
      },
      {
        "categoria": "10",
        "nroparte": 856182,
        "id": 856182,
        "titulo": "Filtro de cabina Porsche 911 Boxster Cayman 1997-2014",
        "stock": 44,
        "descuento": 10,
        "precio": 719,
        "descripcion": "Filtro de cabina para Porsche. Aplica para los siguientes modelos: Porsche 911 1998-2014, Porsche Boxster 1997-2012, Porsche Cayman 2006-2012",
        "imagen1": "14_1.jpg"
      },
      {
        "categoria": "20",
        "nroparte": 986183,
        "id": 986183,
        "titulo": "Pastillas de frenos traseros para Audi Q7, Porsche Cayenne, Volkswagen Touareg",
        "stock": 300,
        "descuento": 15,
        "precio": 1299,
        "descripcion": "Pastillas de frenos traseros para Audi, Volkswagen y Porsche. Aplica para los siguientes modelos: Audi Q7 2007-2015, Porsche Cayenne 2003-2010, Volkswagen Touareg 2004-2010",
        "imagen1": "15_1.jpg"
      },
      {
        "categoria": "20",
        "nroparte": 986184,
        "id": 986184,
        "titulo": "Pastillas de frenos traseros para Porsche 911, 718, Boxster y Cayman",
        "stock": 109,
        "descuento": 10,
        "precio": 1099,
        "descripcion": "Pastilas de frenos traseros Porsche. Aplica para los siguientes modelos: Porsche 718 2017-2019, Porsche 911 2005, Porsche Boxster 2005-2016, Porsche Cayman 2007-2016",
        "imagen1": "16_1.jpg"
      },
      {
        "categoria": "20",
        "nroparte": 986185,
        "id": 986185,
        "titulo": "Disco de freno trasero Porsche",
        "stock": 32,
        "descuento": 0,
        "precio": 2499,
        "descripcion": "Disco de freno trasero Porsche. Aplica para el siguiente modelo: Porsche 911 1998-2004",
        "imagen1": "17_1.jpg"
      },
      {
        "categoria": "20",
        "nroparte": 986186,
        "id": 986186,
        "titulo": "Sensor ABS delantero",
        "stock": 12,
        "descuento": 0,
        "precio": 619,
        "descripcion": "Sensor de freno ABS delantero Porsche. Aplica para el siguiente modelo: Porsche 911 2010-2020",
        "imagen1": "18_1.jpg"
      },
      {
        "categoria": "20",
        "nroparte": 986187,
        "id": 986187,
        "titulo": "Sensor de desgaste de pastillas de freno delanteras",
        "stock": 8,
        "descuento": 0,
        "precio": 149,
        "descripcion": "Sensor de desgaste de pastillas de freno delanteras Porsche. Aplica para el siguiente modelo: Porsche Cayenne 2003-2010",
        "imagen1": "19_1.jpg"
      },
      {
        "categoria": "30",
        "nroparte": 926188,
        "id": 926188,
        "titulo": "Juego de 4 inyectores de combustible",
        "stock": 22,
        "descuento": 0,
        "precio": 2045,
        "descripcion": "Juego de 4 inyectores de combustible compatibles con Porsche 911, 944, 924 1987-1988",
        "imagen1": "20_1.jpg"
      },
      {
        "categoria": "30",
        "nroparte": 926189,
        "id": 926189,
        "titulo": "Módulo de control del encendido",
        "stock": 4,
        "descuento": 0,
        "precio": 10598,
        "descripcion": "Módulo de control del encendido para Porsche 911, 914 Marca Perfect Circle",
        "imagen1": "21_1.jpg"
      }
    ];

  return ape;
}