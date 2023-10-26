import { Injectable } from '@angular/core';
import { Producto } from 'src/app/filter/filter.component'; // Ruta absoluta
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carrito: Producto[] = [];
  private carritoCantidadSource = new BehaviorSubject<number>(0);
  
  constructor() {}

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.carritoCantidadSource.next(this.carrito.length);
  }

  quitarDelCarrito(id: number) {
    const index = this.carrito.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.carritoCantidadSource.next(this.carrito.length);
    }
  }

  obtenerCantidadCarrito() {
    return this.carrito.length;
  }

  get carritoCantidad$(): Observable<number> {
    return this.carritoCantidadSource.asObservable();
  }
  
}