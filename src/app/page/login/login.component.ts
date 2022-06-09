import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../clase/usuarios';
import {Router} from '@angular/router'; //Hay que agregar este import para poder usar router
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuarios;
  auxNombre:string;
  auxClave:string;

  constructor(public router:Router, private miServicio:AuthService) //Es importante agregar los parametros para que pueda hacer router
  {
    this.miUsuario=new Usuarios();
    this.auxNombre="";
    this.auxClave="";
  }
  mostrar(){
    
    if (this.miUsuario.encontrarUsuario(this.auxNombre,this.auxClave)=="SI"){
     
      this.miServicio.UsuarioActual=this.auxNombre;
      this.router.navigate(["/juegos"]);
    }else {
      this.router.navigate(["/registro"]);
    }
  } 

  ngOnInit(): void {
  }

}
