const Destinations = require('../destinations/destination');
const Offerts = require('../offers/offers');
const Vehicles = require('../vehicles/vehicles');

function loadDB() {
    destinos.forEach(
        destination => {
            Destinations.create(destination)
        }
    )
    vehiculos.forEach(
        vehicle => {
            Vehicles.create(vehicle)
        }
    )
    destacados.forEach(
        offert => {
            Offerts.create(offert)
        }
    )
};

let destinos = [
    {
        "name": "Hotel Aquarella resort",
        "place": "Pta del Diablo",
        "extra": "desayuno incluido",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/aquarellaPtaDiablo.jpeg",
    },
    {
        "name": "Hotel Oceano",
        "place": "Lavalleja",
        "extra": "desayuno NO incluido",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/oceanoHotel.jpeg",
    },
    {
        "name": "Hotel LaPe",
        "place": "La pedrera",
        "extra": "desayuno incluido",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/la-pedrera-hotel.jpeg",
    },
    {
        "name": "Hotel El Cabo",
        "place": "Cabo polonio",
        "extra": "desayuno incluido",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/vista-de-la-posada-sobre.jpeg",
    },
    {
        "name": "Hotel Barco",
        "place": "Atlantida",
        "extra": "desayuno incluido",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/barco.jpeg",
    },
    {
        "name": "Hotel Radisson",
        "place": "Montevideo",
        "extra": "5 estrellas",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit nobis soluta! Laboriosam ut voluptatem dolores vero obcaecati. Pariatur sunt minus fugiat amet, dolores optio numquam placeat soluta voluptas facilis.",
        "img": "./img/radi.jpeg",
    }
]

let vehiculos = [
    {
        "img": "./img/raptor.jpeg",
        "name": "Ford Raptor 2021 V8 580hp",
        "price": "USD 150 Dia",
    },
    {
        "img": "./img/swift.jpeg",
        "name": "Swift Sport USD 90 Dia",
        "price": "USD 99 Dia",
    },
    {
        "img": "./img/x3.jpg",
        "name": "BMW X3 2015",
        "price": "USD 120 Dia",
    },
    {
        "img": "./img/mini.jpeg",
        "name": "Mini Cooper Cabrio",
        "price": "USD 200 Dia",
    }
]

let destacados = [
    {
        "img": "./img/hotelColonia.jpeg",
        "name": "Hotel Radisson",
        "place": "Colonia",
        "extra": "desayuno incluido + auto clase A de CORTESÍA",
        "price": "USD 200 / noche",
    },
    {
        "img": "./img/enjoy.jpeg",
        "name": "Hotel Enjoy",
        "place": "Pta del este",
        "extra": "desayuno incluido + camioneta rural CORTESÍA",
        "price": "USD 400 / noche",
    },
    {
        "img": "./img/villaSerrana.jpeg",
        "name": "Hotel Villa Serrana",
        "place": "Lavalleja",
        "extra": "translado al hotel ",
        "price": "USD 135 / noche",
    }
]


module.exports = loadDB;