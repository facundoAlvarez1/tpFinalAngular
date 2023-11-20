import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({

  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent {

  constructor(private dataService: DataService) {}

formValue: any = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  dni:'',
  cantidad: 1
};

errorMessage: string = '';
successMessage: string = '';
errorMessageNombre: string = '';
errorMessageApellido: string = '';
errorMessageEmail: string = '';
errorMessageTelefono: string = '';
errorMessageDNI: string = '';
errorMessageCantidad: string = '';



validateName() {
  if (!this.formValue.nombre) {
    this.errorMessageNombre = 'El nombre es obligatorio';
    return false;
  }

  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/;
  if (!regexNombre.test(this.formValue.nombre)) {
    this.errorMessageNombre = 'Utiliza únicamente caracteres alfabéticos';
    return false;
  }

  this.errorMessageNombre = '';
  return true;
}

validateLastName() {
  if (!this.formValue.apellido) {
    this.errorMessageApellido = 'El apellido es obligatorio';
    return false;
  }

  const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/;
  if (!regexApellido.test(this.formValue.apellido)) {
    this.errorMessageApellido = 'Utiliza únicamente caracteres alfabéticos';
    return false;
  }

  this.errorMessageApellido = '';
  return true;
}

validateEmail() {
  if (!this.formValue.email) {
    this.errorMessageEmail = 'El correo electrónico es obligatorio';
    return false;
  }

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(this.formValue.email)) {
    this.errorMessageEmail = 'Ingresa un correo electrónico válido';
    return false;
  }

  this.errorMessageEmail = '';
  return true;
}

validatePhone() {
  if (this.formValue.telefono && !/^[0-9]{7,}$/.test(this.formValue.telefono)) {
    this.errorMessageTelefono = 'Ingresa un número de teléfono válido (mínimo 7 dígitos)';
    return false;
  }

  this.errorMessageTelefono = '';
  return true;
}

validateDNI() {
  if (!this.formValue.dni) {
    this.errorMessageDNI = 'El DNI es obligatorio';
    return false;
  }

  if (!/^[0-9]{8}$/.test(this.formValue.dni)) {
    this.errorMessageDNI = 'Ingresa un DNI válido (8 dígitos)';
    return false;
  }

  this.errorMessageDNI = '';
  return true;
}

validateQuantity() {
  if (!this.formValue.cantidad) {
    this.errorMessageCantidad = 'La cantidad es obligatoria';
    return false;
  }

  // Puedes agregar lógica adicional si es necesario, por ejemplo, verificar si está en el rango permitido
  // Por ahora, solo se valida que sea un número entero
  if (!Number.isInteger(this.formValue.cantidad)) {
    this.errorMessageCantidad = 'Ingresa un valor entero';
    return false;
  }

  this.errorMessageCantidad = '';
  return true;
}



  onSubmit(formularioContacto: NgForm) {

    const nombreValido = this.validateName();
    const apellidoValido = this.validateLastName();
    const emailValido = this.validateEmail();
    const telefonoValido = this.validatePhone();
    const dniValido = this.validateDNI();
    const cantidadValida = this.validateQuantity();

  if (formularioContacto.valid && nombreValido && apellidoValido && emailValido && telefonoValido && dniValido && cantidadValida) {
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
      setTimeout(() => {
        this.errorMessage = ''; // Borra el mensaje después de 5 segundos
      }, 3000);
      console.log('Formulario no válido');
    }
  }
  
  disableManualInput(event: any) {
    if ((event.key < '0' || event.key > '9') && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Backspace') {
        event.preventDefault();
    }
    
  }


  calculateTotalInvitados(): import("rxjs").Observable<unknown>|import("rxjs").Subscribable<unknown>|Promise<unknown> {
    throw new Error('Method not implemented.');
    }
    
      @ViewChild('formularioContacto') formularioContacto: any; // Cambia ElementRef a any o a NgForm


}
