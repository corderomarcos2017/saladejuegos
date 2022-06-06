import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { RegistroComponent } from './page/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { PantallaJuegosComponent } from './page/pantalla-juegos/pantalla-juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PptComponent } from './page/ppt/ppt.component';
import { AdivinadorComponent } from './page/adivinador/adivinador.component';
import { ListadoResultadosComponent } from './page/listado-resultados/listado-resultados.component';
import { AdivinaConListadoComponent } from './page/adivina-con-listado/adivina-con-listado.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { SumarComponent } from './page/sumar/sumar.component';
import { LogoutComponent } from './page/logout/logout.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    RegistroComponent,
    PantallaJuegosComponent,
    TatetiComponent,
    PptComponent,
    AdivinadorComponent,
    ListadoResultadosComponent,
    AdivinaConListadoComponent,
    AhorcadoComponent,
    SumarComponent,
    LogoutComponent,
    QuienSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
