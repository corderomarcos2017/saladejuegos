import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { Usuarios } from 'src/app/clase/usuarios';

@Component({
  selector: 'app-suscripcion-altas',
  templateUrl: './suscripcion-altas.component.html',
  styleUrls: ['./suscripcion-altas.component.css']
})
export class SuscripcionAltasComponent implements OnInit {
  miUsuario:Usuarios;
  constructor(public miRouter:Router, public miServicio:AuthService) {
    this.miUsuario= new Usuarios();

    this.miUsuario.nombre=miServicio.UsuarioActual;
    this.miUsuario.clave=miServicio.clave;
    this.miUsuario.ppt=miServicio.ppt;
    this.miUsuario.ttt=miServicio.ttt;
    this.miUsuario.adv=miServicio.adv;
    this.miUsuario.aho=miServicio.aho;
    this.miUsuario.tri=miServicio.tri;

    console.info("miUsuario",this.miUsuario);
    console.info("miServicio",miServicio);
  }
 
  //---------------------------------------------------------------------------------------
  suscribir(){

        this.miUsuario.Actualizar(this.miServicio.UsuarioActual);
       // this.miRouter.navigate(["/egreso"]);
       this.miServicio.UsuarioActual="";
        this.miRouter.navigate(["/Suscripcion"]);

      

  }
//---------------------------------------------------------------------------------------
  ngOnInit(): void {
  }

}
