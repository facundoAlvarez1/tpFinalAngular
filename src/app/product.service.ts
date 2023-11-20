import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  category: string;
  price: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
        name: 'Alquiler Auto',
        category: 'lunaDeMiel',
        price: 11000,
        img: 'assets/images/lunaDeMiel/AlquilerAuto.jpg'
    },
    {
        name: 'Desayuno Continental',
        category: 'lunaDeMiel',
        price: 5500,
        img: 'assets/images/lunaDeMiel/desayunoContinental.jpg'
    },
    {
        name: 'Estadia',
        category: 'lunaDeMiel',
        price: 10000,
        img: 'assets/images/lunaDeMiel/EstadiaNocturna.jpg'
    },
    {
        name: 'Hotel',
        category: 'lunaDeMiel',
        price: 20000,
        img: 'assets/images/lunaDeMiel/Hotel.jpg'
    },
    {
        name: 'Cafetera Nueva York',
        category: 'lunaDeMiel',
        price: 10000,
        img: 'assets/images/lunaDeMiel/nuevaYork.jpg'
    },
    {
        name: 'Parapente',
        category: 'Excursiones',
        price: 13000,
        img: 'assets/images/Excursiones/Parapente.jpg'
    },
    {
        name: 'Playa Caribeña',
        category: 'Excursiones',
        price: 13000,
        img: 'assets/images/Excursiones/playaCaribeña.jpg'
    },
    {
        name: 'Travesia',
        category: 'Excursiones',
        price: 13000,
        img: 'assets/images/Excursiones/Travesia.jpg'
    },
    {
        name: 'Yoga',
        category: 'Excursiones',
        price: 13000,
        img: 'assets/images/Excursiones/yoga.jpg'
    },
    {
        name: 'Silla',
        category: 'Cocina',
        price: 21000,
        img: 'assets/images/Cocina/silla.jpg'
    },
    {
        name: 'Sillon',
        category: 'Cocina',
        price: 40000,
        img: 'assets/images/Cocina/sillon.jpg'
    },
    {
        name: 'Taza oporto',
        category: 'Cocina',
        price: 12000,
        img: 'assets/images/Cocina/tazaOporto.jpg'
    }
    ,
    {
        name: 'Taza de Te',
        category: 'Cocina',
        price: 12000,
        img: 'assets/images/Cocina/tazaTe.jpg'
    }
    ,
    {
        name: 'Velas',
        category: 'Cocina',
        price: 3000,
        img: 'assets/images/Cocina/velas.jpg'
    }
    ,
    {
        name: 'Voucher de Bebida',
        category: 'Cocina',
        price: 12000,
        img: 'assets/images/Cocina/voucherBebida.jpg'
    }
    ,
    {
        name: 'Mesa Peko',
        category: 'Cocina',
        price: 12000,
        img: 'assets/images/Cocina/mesaPeko.jpg'
    }
    ,
    {
        name: 'Lampara de Epoca',
        category: 'Cocina',
        price: 12000,
        img: 'assets/images/Cocina/lamparasEpoca.jpg'
    }
    ,
    {
        name: 'Horno Industrial',
        category: 'Cocina',
        price: 28000,
        img: 'assets/images/Cocina/horno.jpg'
    }
    ,
    {
        name: 'Cuchillo de Plata',
        category: 'Cocina',
        price: 7000,
        img: 'assets/images/Cocina/cuchilloPlata.jpg'
    }
    ,
    {
        name: 'Tostadora',
        category: 'Cocina',
        price: 5000,
        img: 'assets/images/Cocina/tostadora.jpg'
    }
    ,
    {
        name: 'Excursion de Bicicleta',
        category: 'lunaDeMiel',
        price: 5000,
        img: 'assets/images/lunaDeMiel/excursionBicicleta.jpg'
    }
    ,
    {
        name: 'Ticket en Disney',
        category: 'Excursiones',
        price: 12000,
        img: 'assets/images/Excursiones/tickeyDisney.jpg'
    }
    ,
    {
        name: 'Tour por la Ciudad',
        category: 'Excursiones',
        price: 8000,
        img: 'assets/images/Excursiones/tourCiudad.jpg'
    }
    ,
    {
        name: 'Alquiler Velero',
        category: 'lunaDeMiel',
        price: 25000,
        img: 'assets/images/lunaDeMiel/alquilerVelero.jpg'
    }
    ,
    {
        name: 'Dia de SPA',
        category: 'lunaDeMiel',
        price: 30000,
        img: 'assets/images/lunaDeMiel/spa.jpg'
    }
];


  getProducts(): Product[] {
    return this.products;
  }
}
