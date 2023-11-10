// finish-checkout-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finish-checkout-dialog',
  templateUrl: './finish-checkout-dialog.component.html',
  styleUrls: ['./finish-checkout-dialog.component.css']
})
export class FinishCheckoutDialogComponent {
  bankTransferSelected = false;
  creditCardSelected = false;
  creditCardInfo = {
    cardNumber: '',
    cardHolder: '',
    expirationDate: ''
  };

  checkoutSummary: any = {}; // Inicializar como un objeto para evitar errores de visualización

  constructor(
    public dialogRef: MatDialogRef<FinishCheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  payByBankTransfer() {
    // Lógica para la transferencia bancaria
    console.log('Transferencia Bancaria');
    this.bankTransferSelected = true;
    this.creditCardSelected = false;
    this.updateCheckoutSummary();
  }

  payByCreditCard() {
    // Cambiar el estado solo si el formulario de tarjeta no está visible
    if (!this.creditCardSelected) {
      this.creditCardSelected = true;
      this.bankTransferSelected = false;
      this.updateCheckoutSummary();
    }
  }

  processCreditCardPayment() {
    // Validar la información de la tarjeta antes de procesar el pago
    if (this.isValidCreditCardInfo()) {
      console.log('Pago con tarjeta de crédito/débito');
      console.log(`Número de tarjeta: ${this.creditCardInfo.cardNumber}`);
      console.log(`Titular de la tarjeta: ${this.creditCardInfo.cardHolder}`);
      console.log(`Fecha de vencimiento: ${this.creditCardInfo.expirationDate}`);
      this.creditCardSelected = true;
      this.bankTransferSelected = false;
      this.updateCheckoutSummary();
    } else {
      console.log('La información de la tarjeta es inválida. Por favor, complete todos los campos.');
    }
  }

  isValidCreditCardInfo(): boolean {
    return (
      this.creditCardInfo.cardNumber.trim() !== '' &&
      this.creditCardInfo.cardHolder.trim() !== '' &&
      this.creditCardInfo.expirationDate.trim() !== ''
    );
  }

  goBack() {
    // Restaurar el estado a la selección de método de pago
    this.creditCardSelected = false;
    this.bankTransferSelected = false;
    this.updateCheckoutSummary(); // Actualizar el resumen al volver atrás
  }

  updateCheckoutSummary() {
    // Lógica para generar el resumen de la compra
    this.checkoutSummary = {
      products: this.data.products,
      totalAmount: this.calculateTotalAmount()
    };
  }

  calculateTotalAmount(): number {
    // Lógica para calcular el monto total
    return this.data.products.reduce((total: any, product: { price: any; }) => total + product.price, 0);
  }
}
