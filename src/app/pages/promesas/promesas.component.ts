import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const promesa = new Promise((resolve, rejects) => {
    //   if (false) {
    //     resolve('Hola');
    //   } else {
    //     rejects('falle');
    //   }
    // });
    // promesa
    //   .then((mensaje) => {
    //     console.log(mensaje);
    //   })
    //   .catch((error) => console.log('Error en mi promesa', error));
    // console.log('fin init');

    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });
  }

  getUsuarios() {
    // const promesa = new Promise((resolve) => {
    //   fetch('https://reqres.in/api/users')
    //     .then((resp) => resp.json())
    //     .then((body) => resolve(body.data));
    // });

    // return promesa;
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
