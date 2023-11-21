import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';

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

