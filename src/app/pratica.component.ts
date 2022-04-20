import { Component } from "@angular/core"; 

@Component({
  selector  : 'app-practica',
  template  : `
      <h1>{{ title }}</h1>
      <h1>La base es : {{base}}</h1>
      <button (click) ="acomulando(+base)"> + {{base}}</button>
      <span>{{ numero }}</span>
      <button (click)=" acomulando(-base)"> - {{base}}</button>
      `
})
export class PracticaComponent{

  title   : string = 'Contador App Practica';
  numero  : number = 10;
  base    : number=5; 

  acomulando( valor : number ){

    this.numero += valor;
  }

}