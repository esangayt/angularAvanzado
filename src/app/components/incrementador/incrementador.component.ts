import {Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit, OnChanges{

  @Input('valor') progreso: number = 10;
  public newValor = signal(0)


  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
    }

    this.newValor.update(value => Number(valor) + Number(value))
    this.valorSalida.emit( this.newValor() );
  }

  onChange(event:any){

    let nuevoValor =0

    if( event.value >= 100 ) {
      nuevoValor = 100
    } else if ( event.value <= 0 ) {
      nuevoValor = 0
    } else {
      nuevoValor = event.value
    }

    this.newValor.set(nuevoValor)

    this.valorSalida.emit( this.newValor() );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.progreso){
      this.newValor.set(this.progreso)
    }
  }
}
