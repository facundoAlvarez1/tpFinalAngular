import { Component } from '@angular/core';
import { ProductService } from '../product.service'; // Importa el servicio y el tipo Producto
import { CarritoService } from '../carrito/carrito.service';

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
  productos: Producto[] = [];
  filtroCategoria: string = '';
  filtroPrecio: string = '';
  filtroBusqueda: string = '';
  productosFiltrados: Producto[] = [];

  constructor(private productService: ProductService, private carritoService: CarritoService) {}


  ngOnInit() {
    // En el ciclo de vida ngOnInit, obtén los productos del servicio
    this.productos = this.productService.getProducts();
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    console.log('Productos antes del filtro:', this.productos);
    let productosFiltradosTemp = [...this.productos];

    console.log('Filtro Categoría:', this.filtroCategoria);
    if (this.filtroCategoria) {
      productosFiltradosTemp = productosFiltradosTemp.filter(producto => producto.categoria === this.filtroCategoria);
    }

    console.log('Productos filtrados:', this.productosFiltrados);
    if (this.filtroPrecio) {
      const [minPrice, maxPrice] = this.filtroPrecio.split('-');
      const minPriceInt = parseInt(minPrice);
      const maxPriceInt = parseInt(maxPrice);

      productosFiltradosTemp = productosFiltradosTemp.filter(producto => {
        return producto.precio >= minPriceInt && producto.precio <= maxPriceInt;
      });
    }

    // Filtrar los productos por nombre si se ingresa una búsqueda
    if (this.filtroBusqueda) {
      productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
        producto.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
      );
    }
    this.productosFiltrados = productosFiltradosTemp;
    console.log('Productos filtrados:', this.productosFiltrados);
  }

  agregarAlCarrito(producto: Producto) {
    // Utiliza el servicio del carrito para agregar el producto al carrito
    this.carritoService.agregarAlCarrito(producto);
  }
}
