import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  constructor() {
    this.basicRXJS()
  }

  basicRXJS(){
   const observable = new Observable(observer=>{
     let i = 0

     const inter =
       setInterval(()=>{
       i++
       observer.next(i)

       if (i === 6){
         clearInterval(inter)
         observer.complete()
       }

       if (i == 2){
         observer.error("ya estás en 2")
       }

     }, 1000)
   })

   observable.subscribe(
     (value) => console.log(value),
     (error) => console.warn(error),
     () => console.log("al finalizar en subscriber"),
   )
  }
}
