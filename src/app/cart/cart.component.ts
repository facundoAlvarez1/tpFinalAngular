// cart.component.ts
import { Component } from '@angular/core';
import { CarritoService } from './cart.service';
import { Product } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { FinishCheckoutDialogComponent } from '../finish-checkout-dialog/finish-checkout-dialog.component';
import { TransferInstructionsDialogComponent } from '../transfer-instructions-dialog/transfer-instructions-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CarritoComponent {
  checkoutDetails: any;

  constructor(
    private carritoService: CarritoService,
    private dialog: MatDialog
  ) {}

  get productsInCart() {
    return this.carritoService.products;
  }

  get totalAmount() {
    return this.carritoService.totalAmount();
  }

  removeFromCart(producto: Product) {
    this.carritoService.removeFromCart(producto);
  }

  finishCheckout() {
    console.clear();
  
    const dialogRef = this.dialog.open(FinishCheckoutDialogComponent, {
      width: '400px',
      data: {
        title: '¡Inicio de Regalo!',
        message: 'Gracias por tu colaboración.',
        products: this.productsInCart,
        cbu: '1234567890123456789012',
        accountHolder: 'Noelia Bazzo',
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo se cerró');
  
      if (result && result.back) {
        // El usuario eligió volver atrás
        console.log('Volver atrás');
        // Agrega la lógica para manejar el caso de volver atrás
      } else {
        // Puedes realizar acciones adicionales después de cerrar el diálogo
        this.checkoutDetails = result;
      }
    });
  }

  payByBankTransfer() {
    const dialogRef = this.dialog.open(TransferInstructionsDialogComponent, {
      width: '400px',
      data: {
        cbu: '1234567890123456789012', // CBU específico
        name: 'Nombre Apellido', // Nombre y Apellido de la persona
        products: this.checkoutDetails.products, // Detalle de la compra
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo de instrucciones de transferencia se cerró');
      // Puedes realizar acciones adicionales después de cerrar el diálogo
    });
  }
}
