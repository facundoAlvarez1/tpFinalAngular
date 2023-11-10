// finish-checkout.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinishCheckoutService {
  // Puedes agregar lógica relacionada con el pago aquí en el futuro
  finishCheckout() {
    // Lógica para finalizar la compra (pago, confirmación, etc.)
    console.log('Compra finalizada. Agregar lógica de pago aquí.');
  }
}
