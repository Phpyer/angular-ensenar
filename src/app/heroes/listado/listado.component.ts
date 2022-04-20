import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] =['Spiderman','Goku','Batman','Invoker'];
  heroeBorrado: string ='';
  borrarHeroe(){
    console.log("Borrando...");
    this.heroeBorrado = this.heroes.shift() || '';
    // console.log( typeof heroeBorrado );
    // this.heroes = [];

  }
}
