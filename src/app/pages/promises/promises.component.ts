import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent {
  constructor() {
    this.basicPromise().then((resolve)=>{
      console.log(resolve)
    }).catch((reject)=>{
      console.log(reject)
    })

    this.intermediatePromise().then((resolve)=>{
      console.log(resolve)
    })
  }

  basicPromise() {
    return new Promise((resolve, reject)=>{
      if(false){
        resolve('Hey! It worked')
      }else{
        reject('Something went wrong')
      }
    })
  }

  intermediatePromise(){
    // const api = fetch('https://reqres.in/api/users?page=2')
    //   .then((response)=>{
    //     console.log(response)
    //     return response.json()
    //   })
    //   .then((user)=>{
    //     console.log(user.data)
    //   })

    return new Promise((resolve, reject)=> {
      fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((user) => resolve(user.data))
    })
  }
}
