import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';


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
      '¿Donde es la ceremonia religiosa?',
      '¿Donde esta ubicado el salon?',
      '¿Menu y bebida?',
      '¿Horario de la fiesta?',
      '¿Traslado a la vuelta?'
    ];
    return questions[index];
  }

  getAnswer(index: number): string {
    const answers = [
      'La ceremonia se celebrara en la Parroquia San Jose ubicada en Matheu 3349.La misma dara inicio a las 17:00 del dia 23/11/2023.',
      'La fiesta se celebrara en el salon Luxemburgo ubicado en ruta 226 km 12 Mar del Plata.Habra combis al finalizar la ceremonia para trasladarnos al salon.',
      'Vamos a disfrutar de un menu criollo y tambien contamos con opciones vegetarianas / veganas y celiacas.Ademas tenemos una barra de tragos para disfrutar.',
      'La fiesta inicia a las 20 hs y finaliza a las 04:30 am.',
      'Las combis van a tener salidas al finalizar la fiesta , y tendran un recorrido por los principales puntos de la ciudad.'
    ];
    return answers[index];
  }

  formValue: any = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    dni:'',
    cantidad: 1
    
  };




  onSubmit(formularioContacto: NgForm) {
    if (formularioContacto.valid) {
      this.dataService.getInvitados().subscribe(
        (invitados: any[]) => {
          if (invitados.some((invitado) => invitado.dni === this.formValue.dni)) {
            this.errorMessage = 'El DNI ya está registrado.';
            setTimeout(() => {
              this.errorMessage = '';
            }, 2000);
          } else {
            const formData = {
              nombre: this.formValue.nombre,
              apellido: this.formValue.apellido,
              email: this.formValue.email,
              telefono: this.formValue.telefono,
              dni: this.formValue.dni,
              cantidad: this.formValue.cantidad
            };

            this.dataService.saveRecord(formData).subscribe(
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
          }
        },
        (error) => {
          console.error('Error al obtener invitados:', error);
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

private showSnackBar(message: string): void {
  // Esta función probablemente debería estar en tu servicio de utilidad o un componente compartido
  console.log(message);
}

}
