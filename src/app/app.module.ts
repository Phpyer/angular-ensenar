import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { PracticaComponent } from './pratica.component';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
