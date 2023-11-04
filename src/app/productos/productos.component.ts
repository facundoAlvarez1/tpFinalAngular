import { Component } from '@angular/core';
import { ProductService, Producto } from '../product.service'; // Asegúrate de importar el servicio y el tipo Producto

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [];
productosFiltrados: any;

constructor(private productService: ProductService) {
  this.productos = this.productService.getProducts(); // Obtiene los productos del servicio
}
}

