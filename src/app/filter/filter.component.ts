import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

export interface Producto {
  id : number;
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

  carrito: Producto[] = [];

  productos: Producto[] = [
    { 
      id:1,
      nombre: 'Alquiler Auto',
      categoria: 'lunaDeMiel',
      precio: 11000,
      imagen: 'assets/images/lunaDeMiel/AlquilerAuto.jpg'
    },
    {
      id:2,
      nombre: 'Desayuno Continental',
      categoria: 'lunaDeMiel',
      precio: 5500,
      imagen: 'assets/images/lunaDeMiel/desayunoContinental.jpg'
    },
    { 
      id:3,
      nombre: 'Estadia',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/EstadiaNocturna.jpg'
    },
    { 
      id:4,
      nombre: 'Hotel',
      categoria: 'lunaDeMiel',
      precio: 20000,
      imagen: 'assets/images/lunaDeMiel/Hotel.jpg'
    },
    { 
      id:5,
      nombre: 'Nueva York',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/nuevaYork.jpg'
    },
    { 
      id:6,
      nombre: 'Parapente',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Parapente.jpg'
    },
    { 
      id:7,
      nombre: 'Playa Caribeña',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/playaCaribeña.jpg'
    },
    { 
      id:8,
      nombre: 'Travesia',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Travesia.jpg'
    },
    { 
      id:9,
      nombre: 'Yoga',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/yoga.jpg'
    },
    { 
      id:10,
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
  cartService: any;

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

  constructor(private carritoService: CarritoService) {
    this.productosFiltrados = [...this.productos];
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }

  quitarDelCarrito(id: number) {
    const index = this.carrito.findIndex(p => p.id === id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

}