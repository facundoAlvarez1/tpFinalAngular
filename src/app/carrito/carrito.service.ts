import { Injectable } from '@angular/core';
import { Producto } from '../product.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productosEnCarrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.productosEnCarrito.push(producto);
  }

  quitarDelCarrito(producto: Producto) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
    }
  }

  calcularTotal(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }
}
