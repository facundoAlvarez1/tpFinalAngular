import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorMessage: string = '';
  successMessage: string = '';

  calculateTotalInvitados(): import("rxjs").Observable<unknown>|import("rxjs").Subscribable<unknown>|Promise<unknown> {
throw new Error('Method not implemented.');
}
  @ViewChild('formularioContacto') formularioContacto: any; // Cambia ElementRef a any o a NgForm
  itemActivo: number | null = null;


  constructor(private dataService: DataService) {}

  toggleAccordion(index: number) {
    if (this.itemActivo === index) {
      this.itemActivo = null;
    } else {
      this.itemActivo = index;
    }
  }

  getQuestion(index: number): string {
    const questions = [
      '¿Como llegar al salón?',
      '¿Que servicios incluye la fiesta?',
      '¿Que capacidad tiene el salón?',
      '¿Se pueden visitar las instalaciones?',
      '¿Cuáles son los medios de pago?'
    ];
    return questions[index];
  }

  getAnswer(index: number): string {
    const answers = [
      'Estamos ubicados en ruta 226 km 12 Mar del Plata. Contamos un un servicio de combi que conecta los puntos mas importantes de la ciudad.',
      'Ofrecemos un servicio integral que abarca las fotos, el video, la musica, la decoración, barra de tragos, transporte y mucho mas...',
      'Contamos con 2 salones. El mas pequeño tiene una capacidad para hasta 100 personas, mientras que el principal puede albergar hasta 150 invitados. Ambas opciones tienen acceso al amplio jardin exterior.',
      'Si, con previa cita pueden venir a conocernos. Los esperamos.',
      'Aceptamos los siguientes medios de pago: efectivo, tarjeta de débito y crédito, transferencia bancaria y MercadoPago..'
    ];
    return answers[index];
  }

  formValue: any = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    cantidad: 1
  };




  onSubmit() {
      if (this.formularioContacto.valid) {
          const formData = {
              nombre: this.formValue.nombre,
              apellido: this.formValue.apellido,
              email: this.formValue.email,
              telefono: this.formValue.telefono,
              cantidad: this.formValue.cantidad
          };
  
          this.dataService.saveRecord(formData)
              .subscribe(
                  (response) => {
                      console.log('Registro guardado:', response);
                      this.formValue = {
                          nombre: '',
                          apellido: '',
                          email: '',
                          telefono: '',
                          cantidad: 0
                      };
                      this.successMessage = 'Registro exitoso, te esperamos en la fiesta';
                      setTimeout(() => {
                          this.successMessage = ''; // Borra el mensaje después de 5 segundos
                      }, 3000);
                  },
                  (error) => {
                      console.error('Error:', error);
                  }
              );
      } else {
          this.errorMessage = 'Revise los datos ingresados.';
          console.log('Formulario no válido');
      }
  }
  

disableManualInput(event: any) {
  if ((event.key < '0' || event.key > '9') && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Backspace') {
      event.preventDefault();
  }
  
}

}
