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
    // ... tus productos ...
  ];

  filtroCategoria: string = '';
  filtroPrecio: string = '';
  filtroBusqueda: string = '';

  productosFiltrados: Producto[] = [];

  constructor() {
    this.aplicarFiltro();
  }




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
}

