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
    //Recupero el valor de lamatriz JSON
    var listadoUsuarios=[];
    var encontrado = 0;
    //Recupero todos los datos del localstorage
    listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
    console.info("Matriz : ", listadoUsuarios);
    if(Object.entries(listadoUsuarios).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuarios.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.auxNombre){
          //Si la contraseña es igual a la guardada
          if(element.clave==this.auxClave){
            encontrado = 1;
          } 
        }
      });
    } 

    if (encontrado==1){
     
      this.miServicio.UsuarioActual=this.auxNombre;
      this.router.navigate(["/juegos"]);
    }else {
      this.router.navigate(["/registro"]);
    }
  } 

  ngOnInit(): void {
  }

}
