import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cantidadCarrito: number = 0;
  mostrarCarrito: boolean = false; 

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carritoCantidad$.subscribe((cantidad: number) => {
      this.cantidadCarrito = cantidad;
    });
  }

  abrirCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito; // Cambia el estado de la visibilidad del carrito
  }
}
