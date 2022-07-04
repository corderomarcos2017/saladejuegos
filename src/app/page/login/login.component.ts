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

  constructor(public router:Router, public miServicio:AuthService) //Es importante agregar los parametros para que pueda hacer router
  {
    this.miUsuario=new Usuarios();
    this.auxNombre="";
    this.auxClave="";
  }
  mostrar(){
    
    if (this.miUsuario.encontrarUsuario(this.auxNombre,this.auxClave)=="SI"){
     
      let listadoUsuarios=[];
      //Recupero todos los datos del localstorage
      listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
      //recorro todo el contenido de la matriz
      listadoUsuarios.forEach((element: any): void => {
          //Si el nombre de usuario ingresado es igual al guardado 
          if(element.nombre==this.auxNombre){
            this.miServicio.UsuarioActual=element.nombre;
            this.miServicio.clave=element.clave;
            this.miServicio.ppt=element.ppt;
            this.miServicio.ttt=element.ttt;
            this.miServicio.adv=element.adv;
            this.miServicio.aho=element.aho;
            this.miServicio.tri=element.tri;
            console.info("miServicio",this.miServicio);
            console.info("element",element);
          }
      });

      this.router.navigate(["/juegos"]);
    }else {
      this.router.navigate(["/registro"]);
    }
  } 

  ngOnInit(): void {
  }

}
