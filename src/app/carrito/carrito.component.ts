import { Component } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';
import { Producto } from '../product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  constructor(private carritoService: CarritoService) {}

  get productosEnCarrito() {
    return this.carritoService.productosEnCarrito;
  }

  get totalCarrito() {
    return this.carritoService.calcularTotal();
  }


  quitarDelCarrito(producto: Producto) {
    this.carritoService.quitarDelCarrito(producto);
  }
  
  
}
