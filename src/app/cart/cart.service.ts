import { Injectable } from '@angular/core';
import { Product } from '../product.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  products: Product[] = [];

  addToCart(producto: Product) {
    this.products.push(producto);
  }

  removeFromCart(producto: Product) {
    const index = this.products.indexOf(producto);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  totalAmount(): number {
    return this.products.reduce((total, producto) => total + producto.price, 0);
  }

  clearCart() {
    this.products = [];
  }
  
}
