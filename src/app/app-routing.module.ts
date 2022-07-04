import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianadvGuard } from './guardianes/guardianadv.guard';
import { GuardianahoGuard } from './guardianes/guardianaho.guard';
import { GuardianpptGuard } from './guardianes/guardianppt.guard';
import { GuardiantriGuard } from './guardianes/guardiantri.guard';
import { GuardiantttGuard } from './guardianes/guardianttt.guard';
import { AdivinaConListadoComponent } from './page/adivina-con-listado/adivina-con-listado.component';
import { AdivinadorComponent } from './page/adivinador/adivinador.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component'; //Lo agrega aUTOMATICAMENTE
import { ErrorComponent } from './page/error/error.component';
import { ListadoResultadosComponent } from './page/listado-resultados/listado-resultados.component';
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';
import { NoestasuscriptoComponent } from './page/noestasuscripto/noestasuscripto.component';
import { PantallaJuegosComponent } from './page/pantalla-juegos/pantalla-juegos.component';
import { PptComponent } from './page/ppt/ppt.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { SumarComponent } from './page/sumar/sumar.component';
import { SuscripcionAltasComponent } from './page/suscripcion-altas/suscripcion-altas.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  {path:"inicio",component:BienvenidoComponent},
  {path:"ingreso",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"egreso",component:LogoutComponent},
  {path:"quiensoy",component:QuienSoyComponent},
  {path:"Suscripcion",component:SuscripcionComponent},
  {path:"SuscripcionAltas",component:SuscripcionAltasComponent},
  {path:"NoEstaSuscripto",component:NoestasuscriptoComponent},
  {path:"juegos",component:PantallaJuegosComponent,
    children:[ //Aca agregamos los path y componente hijos
      {path:"tateti",component:TatetiComponent,canActivate:[GuardiantttGuard]},
      {path:"ppt",component:PptComponent,canActivate:[GuardianpptGuard]},
      {path:"Adivinador",component:AdivinadorComponent,canActivate:[GuardianadvGuard]}, 
      {path:"Ahorcado",component:AhorcadoComponent,canActivate:[GuardianahoGuard]}, 
      {path:"Sumar",component:SumarComponent,canActivate:[GuardiantriGuard]},     
      {path:"ListadoResultado",component:ListadoResultadosComponent},
      {path:"AdivinaConListado",component:AdivinaConListadoComponent},
    ]
  },
  {path:" ",component:BienvenidoComponent}, //Para que no me carge Bienvenido en forma predeterminada
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
