import { Injectable } from '@angular/core';

export interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productos: Producto[] = [
    {
      nombre: 'Alquiler Auto',
      categoria: 'lunaDeMiel',
      precio: 11000,
      imagen: 'assets/images/lunaDeMiel/AlquilerAuto.jpg'
    },
    {
      nombre: 'Desayuno Continental',
      categoria: 'lunaDeMiel',
      precio: 5500,
      imagen: 'assets/images/lunaDeMiel/desayunoContinental.jpg'
    },
    {
      nombre: 'Estadia',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/EstadiaNocturna.jpg'
    },
    {
      nombre: 'Hotel',
      categoria: 'lunaDeMiel',
      precio: 20000,
      imagen: 'assets/images/lunaDeMiel/Hotel.jpg'
    },
    {
      nombre: 'Nueva York',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/nuevaYork.jpg'
    },
    {
      nombre: 'Parapente',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Parapente.jpg'
    },
    {
      nombre: 'Playa Caribeña',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/playaCaribeña.jpg'
    },
    {
      nombre: 'Travesia',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Travesia.jpg'
    },
    {
      nombre: 'Yoga',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/yoga.jpg'
    },
    {
      nombre: 'Silla',
      categoria: 'Cocina',
      precio: 13000,
      imagen: 'assets/images/Cocina/silla.jpg'
    },

    // Agrega más productos...
  ];

  getProducts(): Producto[] {
    return this.productos;
  }
}
