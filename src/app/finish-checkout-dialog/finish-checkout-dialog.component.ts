// finish-checkout-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FinishCheckoutService } from '../finish-checkout.service';
import { CarritoService } from '../cart/cart.service';


@Component({
  selector: 'app-finish-checkout-dialog',
  templateUrl: './finish-checkout-dialog.component.html',
  styleUrls: ['./finish-checkout-dialog.component.css']
})
export class FinishCheckoutDialogComponent {
process() {
throw new Error('Method not implemented.');
}

  cardType: string = '';
  errorMessage: string = '';
  dialog: any;

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
    cvv: '',
    email: '',
  };

  checkoutSummary: any = {};

  constructor(
    public dialogRef: MatDialogRef<FinishCheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private finishCheckoutService: FinishCheckoutService,
    private snackBar: MatSnackBar,
    private carritoService: CarritoService
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
      console.log(`CVV: ${this.creditCardInfo.cvv}`);

      // Verifica los números iniciales y guarda la tarjeta
      const detectedCardType = this.identifyCardType(this.creditCardInfo.cardNumber);
      if (detectedCardType) {
        console.log(`Tarjeta ${detectedCardType} válida. Guardando...`);
        // Guardar la tarjeta y realizar otras acciones necesarias
        this.finishCheckoutService.saveCreditCard(this.creditCardInfo, this.calculateTotalAmount()).subscribe(
          response => {
            console.log('Tarjeta guardada con éxito:', response);
            this.showSnackBar('Pago con tarjeta exitoso. Gracias por tu compra.');
            this.processDebit();
          },
          error => {
            console.error('Error al guardar la tarjeta:', error);
          }
        );
        
        this.clearCartAndCloseDialog();

      } else {
        this.errorMessage = 'Tipo de tarjeta no admitido. Por favor, use una tarjeta válida.';
        this.showSnackBar(this.errorMessage);
      }

      this.cardType = detectedCardType; // Actualiza la propiedad cardType
      this.creditCardSelected = true;
      this.bankTransferSelected = false;
      this.updateCheckoutSummary();
    } else {
      this.errorMessage = 'Revise los datos ingresados por favor.';
      this.showSnackBar(this.errorMessage);
    }
  
  }

  clearCartAndCloseDialog(): void {
    this.carritoService.clearCart();
    this.dialogRef.close();
  }

  isValidCreditCardInfo(): boolean {
    const cardNumberRegex = /^\d{16}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/YY
    const nameRegex = /^[a-zA-Z\s]+$/; // Expresión regular que permite solo letras y espacios
    const cvvRegex = /^\d{3}$/; // Expresión regular que permite solo 3 dígitos
    const emailRegex = /^[^\s@]+@(gmail\.com|outlook\.com|hotmail\.com)$/; 


    if (
      cardNumberRegex.test(this.creditCardInfo.cardNumber.trim()) &&
      nameRegex.test(this.creditCardInfo.cardHolder.trim()) && // Validar el nombre
      expirationDateRegex.test(this.creditCardInfo.expirationDate.trim()) &&
      cvvRegex.test(this.creditCardInfo.cvv.trim()) &&
      emailRegex.test(this.creditCardInfo.email.trim()) // Validar el correo electrónico

    ) {
      // Obtiene la fecha actual
      const currentDate = new Date();

      // Extrae el mes y el año de la fecha de vencimiento
      const [expirationMonth, expirationYear] = this.creditCardInfo.expirationDate.split('/');

      // Crea una nueva fecha con la fecha de vencimiento
      const expirationDate = new Date(Number(`20${expirationYear}`), Number(expirationMonth) - 1);
      // Restamos 1 al mes, ya que en JavaScript los meses van de 0 a 11

      // Compara la fecha de vencimiento con la fecha actual
      if (!(expirationDate > currentDate)) {
        this.errorMessage = 'La fecha de vencimiento de la tarjeta es inválida. Por favor, ingrese una tarjeta válida.';
        this.showSnackBar(this.errorMessage);
        return false;
      }

      return true;
    }

    this.errorMessage = 'Revise los datos ingresados.';
    this.showSnackBar(this.errorMessage);
    return false;
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
    } else {
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

  // Método para mostrar una alerta utilizando MatSnackBar
  private showSnackBar(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000; // Duración de la alerta en milisegundos (opcional)
    this.snackBar.open(message, 'Cerrar', config);
  }
  

  processDebit() {
  
    console.log(this.carritoService);
  // Aquí puedes incluir la lógica necesaria para procesar la finalización del pago
    this.carritoService.clearCart();
    // Cierra la ventana del diálogo
    this.dialogRef.close();
  }
}
