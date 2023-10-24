import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      '¿De qué son las piezas?',
      '¿Cómo hago para realizar un pedido?',
      '¿Realizan ventas mayoristas?',
      '¿Realizan envíos?',
      '¿Cuáles son los medios de pago?'
    ];
    return questions[index];
  }

  getAnswer(index: number): string {
    const answers = [
      'Las piezas son de cerámica de alta calidad. Puedes elegir las piezas en blanco que más te gusten entre las opciones disponibles para luego añadirles tu diseño preferido.',
      'Para realizar un pedido, pedir una cotización o consultar sobre algún producto, puedes enviarnos un mail a vickysart@mail.com o contactarte a nuestro WhatsApp. Para tomar un pedido, te enviaremos las opciones que tenemos en piezas en blanco para que elijas la que más te guste y conversaremos acerca del diseño que deseas que pintemos en dicha pieza. Los diseños pueden ser 100% personalizados o elegir alguno entre nuestras múltiples opciones disponibles en la sección de Productos.',
      'Al tratarse de productos artesanales, no contamos con un gran stock de productos ya listos e iguales. Por eso, si te interesa revender nuestras piezas por favor contáctanos por mail a vickysart@mail.com o a través de nuestro WhatsApp para conversar sobre la realización de pedidos mayoristas.',
      'Realizamos envíos a todo el país por intermedio de Correo Argentino. Para conocer los costos de envío por favor envíanos un mail a vickysart@mail.com o un WhatsApp indicándonos tu código postal para que podamos enviarte la cotización. También contamos con punto de retiro de mercadería sin costo adicional en Vicente López (Buenos Aires).',
      'Aceptamos los siguientes medios de pago: efectivo, tarjeta de débito y crédito*, transferencia bancaria y MercadoPago. <br><br>*Los cobros con tarjeta se realizan a través de MercadoPago, por lo que las opciones de financiación para pagos con tarjeta de crédito son las disponibles para cada tarjeta y banco según el convenio que posean con MercadoPago al momento de la transacción.'
    ];
    return answers[index];
  }

  formValue: any = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    cantidad: 0
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
      this.dataService.guardarRegistro(formData)
        .subscribe(
          (response) => {
            console.log('Registro guardado:', response);
            // Redirige o muestra un mensaje de confirmación
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    } else {
      console.log('Formulario no válido');
    }
  }



}

/*
function loadPage(sectionId: string) {
  // Oculta todas las secciones
  const sections = document.querySelectorAll<HTMLElement>('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  // Muestra la sección correspondiente
  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'block';
  }
}

// Carga la sección "Inicio" al cargar la página
loadPage('inicio');
*/