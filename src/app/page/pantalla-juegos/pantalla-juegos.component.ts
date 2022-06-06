import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //Hay que agregar este import para poder usar router
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-pantalla-juegos',
  templateUrl: './pantalla-juegos.component.html',
  styleUrls: ['./pantalla-juegos.component.css']
})
export class PantallaJuegosComponent implements OnInit {
  MiUsuario:String;

  constructor(public router:Router, public miServicio:AuthService) {
    this.MiUsuario=this.miServicio.UsuarioActual;
    if(this.MiUsuario==""){
      this.router.navigate(["/ingreso"]);
    }
  }

  ngOnInit(): void {
  }

}
