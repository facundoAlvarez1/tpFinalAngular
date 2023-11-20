import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemActivo: number | null = null;

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

private showSnackBar(message: string): void {
  console.log(message);
}

}
