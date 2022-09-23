import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//locale para Pipes
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); //registramos el locale_id

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { PipesExamplesComponent } from './components/pipes-examples/pipes-examples.component';
import { MultiplicarPipe } from './pipes/multiplicar.pipe';
import { CalcularPuntajePipe } from './pipes/calcular-puntaje.pipe';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    PipesExamplesComponent,
    MultiplicarPipe,
    CalcularPuntajePipe,
    EjemploAnimacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
