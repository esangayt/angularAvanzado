import { Component } from '@angular/core';
import {Observable, retry} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  constructor() {
    this.retornaObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs:', valor ),
      error => console.warn('Error:', error ),
      () => console.info('Obs terminado')
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if ( i === 8 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2 ) {
          clearInterval(intervalo) // Si no se hace eso 2 veces el intervalo manipula i
          observer.error('i llego al valor de 2');
        }
      }, 1000 )
    });
  }
}
