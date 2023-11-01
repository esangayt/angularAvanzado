import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {
    public progreso1: number = 20;
    public progreso2: number = 30;

    get getProgress1(){
        return `${this.progreso1}%`;
    }

    get getProgress2(){
        return `${this.progreso2}%`;
    }

  cambiarValor(valor: number){
    if(this.progreso1 >= 100 && valor > 0){
        this.progreso1 = 100;
        return;
    }

    if(this.progreso1 <= 0 && valor < 0){
        this.progreso1 = 0;
        return;
    }

    this.progreso1 = valor;
    }
  }
