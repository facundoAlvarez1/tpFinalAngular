import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service'; // Asegúrate de importar el servicio y el tipo Producto

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products: Product[] = [];
productsFiltered: any;

constructor(private productService: ProductService) {
  this.products = this.productService.getProducts(); // Obtiene los productos del servicio
}
}

