import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


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

  filtroCategoria: string = '';
 filtroPrecio : string= '';
  filtroBusqueda: string = '';

  aplicarFiltro() {
    // Filtrar los productos por la categoría seleccionada
    if (this.filtroCategoria) {
      this.productosFiltrados = this.productos.filter(producto => producto.categoria === this.filtroCategoria);
    } else {
      // Si no se selecciona ninguna categoría, mostrar todos los productos
      this.productosFiltrados = [...this.productos];
    }
  
    // Filtrar los productos por el rango de precio seleccionado
    if (this.filtroPrecio) {
      // Desglosa el rango de precio seleccionado
      const [minPrice, maxPrice] = this.filtroPrecio.split('-');
    
      // Convierte los valores en cadenas a números enteros
      const minPriceInt = parseInt(minPrice);
      const maxPriceInt = parseInt(maxPrice);
    
      // Filtra los productos por precio
      this.productosFiltrados = this.productosFiltrados.filter(producto => {
        return producto.precio >= minPriceInt && producto.precio <= maxPriceInt;
      });
    }
  
    // Filtrar los productos por nombre si se ingresa una búsqueda
    if (this.filtroBusqueda) {
      this.productosFiltrados = this.productosFiltrados.filter(producto =>
        producto.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
      );
    }
  }

  productosFiltrados: Producto[] = [];

  constructor() {
    this.productosFiltrados = [...this.productos]; // Inicialmente, muestra todos los productos
  }
}
