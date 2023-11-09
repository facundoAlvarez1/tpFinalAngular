import { Component } from '@angular/core';
import { CarritoService } from './cart.service';
import { Product } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CarritoComponent {
  constructor(private carritoService: CarritoService) {}

  get productsInCart() {
    return this.carritoService.products;
  }

  get totalAmount() {
    return this.carritoService.totalAmount();
  }


  removeFromCart(producto: Product) {
    this.carritoService.removeFromCart(producto);
  }
  
  
}
