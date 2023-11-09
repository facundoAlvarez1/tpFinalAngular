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
        name: 'Nueva York',
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
        price: 13000,
        img: 'assets/images/Cocina/silla.jpg'
    },

    // Agrega más productos...
];


  getProducts(): Product[] {
    return this.products;
  }
}
