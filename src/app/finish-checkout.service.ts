// finish-checkout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FinishCheckoutService {
  private apiUrl = 'http://localhost:3000/tarjetas'; 
  creditCardInfo: any;

  constructor(private http: HttpClient) {}

  saveCreditCard(cardInfo: any) {
    return this.http.post(this.apiUrl, cardInfo);
  }

  // Agrega un método para obtener todas las tarjetas guardadas
  getCreditCards() {
    return this.http.get(this.apiUrl);
  }

  finishCheckout(creditCardInfo: any): Observable<any> {
    // Validar números iniciales de la tarjeta (ej. para Visa o Mastercard)
    const cardNumberPrefix = creditCardInfo.cardNumber.slice(0, 1);
    const isValidCardType = cardNumberPrefix === '4' || cardNumberPrefix === '5'; // Puedes ajustar según los prefijos correctos

    if (!isValidCardType) {
      return new Observable(observer => observer.error('Tipo de tarjeta no admitido.'));
    }

    // Validar el CVV (por ejemplo, asumiendo que debe tener 3 o 4 dígitos)
    if (!/^\d{3,4}$/.test(creditCardInfo.cvv.trim())) {
      return new Observable(observer => observer.error('CVV no válido.'));
    }

    // Lógica para finalizar la compra (pago, confirmación, etc.)
    console.log('Compra finalizada. Agregar lógica de pago aquí.');

    // Almacena la tarjeta en el servidor JSON
    return this.http.post(this.apiUrl, creditCardInfo);
  }

}

