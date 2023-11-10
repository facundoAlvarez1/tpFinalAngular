// finish-checkout-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinishCheckoutService } from '../finish-checkout.service';

@Component({
  selector: 'app-finish-checkout-dialog',
  templateUrl: './finish-checkout-dialog.component.html',
  styleUrls: ['./finish-checkout-dialog.component.css']
})
export class FinishCheckoutDialogComponent {

  cardType: string = '';


  isValidCardNumber(): boolean {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(this.creditCardInfo.cardNumber.trim());
  }

  bankTransferSelected = false;
  creditCardSelected = false;
  creditCardInfo = {
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  };

  checkoutSummary: any = {};

  constructor(
    public dialogRef: MatDialogRef<FinishCheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private finishCheckoutService: FinishCheckoutService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  payByBankTransfer() {
    this.bankTransferSelected = true;
    this.creditCardSelected = false;
    this.updateCheckoutSummary();
  }

  payByCreditCard() {
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
      console.log(`CVV: ${this.creditCardInfo.cvv}`); // Imprime el CVV
  
      // Verifica los números iniciales y guarda la tarjeta
      const detectedCardType = this.identifyCardType(this.creditCardInfo.cardNumber);
      if (detectedCardType) {
        console.log(`Tarjeta ${detectedCardType} válida. Guardando...`);
        // Guardar la tarjeta y realizar otras acciones necesarias
        this.finishCheckoutService.saveCreditCard(this.creditCardInfo).subscribe(
          response => {
            console.log('Tarjeta guardada con éxito:', response);
          },
          error => {
            console.error('Error al guardar la tarjeta:', error);
          }
        );
      } else {
        console.log('Tipo de tarjeta no admitido. Por favor, use una tarjeta válida.');
      }
  
      this.cardType = detectedCardType; // Actualiza la propiedad cardType
      this.creditCardSelected = true;
      this.bankTransferSelected = false;
      this.updateCheckoutSummary();
    } else {
      console.log('La información de la tarjeta es inválida. Por favor, complete todos los campos.');
    }
  }

  isValidCreditCardInfo(): boolean {
    const cardNumberRegex = /^\d{16}$/;
    return (
      cardNumberRegex.test(this.creditCardInfo.cardNumber.trim()) &&
      this.creditCardInfo.cardHolder.trim() !== '' &&
      this.creditCardInfo.expirationDate.trim() !== '' &&
      /^\d{3}$/.test(this.creditCardInfo.cvv.trim()) // Validar CVV con regex de 3 dígitos
    );
  }

  identifyCardType(cardNumber: string): string {
    // Visa
    const visaRegex = /^4[0-9]{6,}$/;
    if (visaRegex.test(cardNumber)) {
      return 'Visa';
    }

    // Mastercard
    const mastercardRegex = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
    if (mastercardRegex.test(cardNumber)) {
      return 'Mastercard';
    }
    else {
      return 'Desconocido';
    }
  }

  goBack() {
    this.creditCardSelected = false;
    this.bankTransferSelected = false;
    this.updateCheckoutSummary();
  }

  updateCheckoutSummary() {
    this.checkoutSummary = {
      products: this.data.products,
      totalAmount: this.calculateTotalAmount()
    };
  }

  calculateTotalAmount(): number {
    return this.data.products.reduce((total: any, product: { price: any; }) => total + product.price, 0);
  }


  onCardNumberInput(): void {
    // Llama a detectCardType después de ingresar los primeros cuatro dígitos
    if (this.creditCardInfo.cardNumber.length >= 4) {
      this.detectCardType(this.creditCardInfo.cardNumber.substring(0, 4));
    }
  }

  detectCardType(cardNumber: string): void {
    const visaRegex = /^4[0-9]{0,15}$/; // Visa puede tener hasta 16 dígitos
    const mastercardRegex = /^5[1-5][0-9]{0,14}$/; // Mastercard puede tener hasta 16 dígitos
  
    if (visaRegex.test(cardNumber)) {
      this.cardType = 'Visa';
    } else if (mastercardRegex.test(cardNumber)) {
      this.cardType = 'Mastercard';
    } else {
      this.cardType = 'Desconocido';
    }
  }


}
