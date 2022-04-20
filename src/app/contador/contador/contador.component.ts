import { Component } from '@angular/core';

@Component({
  selector    : 'app-contador',
  template    : `
    <h1>{{ title }}</h1>
    <h1>La base es : {{base}}</h1>
    <button (click) ="acomulando(+base)"> + {{base}}</button>
    <span>{{ numero }}</span>
    <button (click)=" acomulando(-base)"> - {{base}}</button>
  `
})
//decorador para transformar esta siemple clase en un componente propio de angular
export class ContadorComponent{

  title   : string = 'Contador App';
  numero  : number = 10;
  base    : number=5; 

  acomulando( valor : number ){

    this.numero += valor;
  }
  
}