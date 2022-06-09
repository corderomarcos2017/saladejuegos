import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { Usuarios } from 'src/app/clase/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  auxNombre: string;
  auxClave1: string;
  auxClave2: string;
  encontrado: string;
  miUsuario: Usuarios;
  
  constructor(public router:Router, public miServicio:AuthService) { 
    this.miUsuario= new Usuarios();
    this.auxClave1="";
    this.auxClave2="";
    this.auxNombre="";
    this.encontrado="NO";
  }
  limpiarMensaje(){
    if(this.encontrado=="SI"){
      this.encontrado = "NO";
      console.log("encontro:"+this.encontrado);     
    }

  }
  registrar(){
    if(this.auxClave1==this.auxClave2)
    {

      this.miUsuario.nombre=this.auxNombre;
      this.miUsuario.clave=this.auxClave1;

      var listadoUsuarios=[];
      //Recupero todos los datos del localstorage
      listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
      console.info("Matriz : ", listadoUsuarios);
      if(Object.entries(listadoUsuarios).length!=0){
        //recorro todo el contenido de la matriz
        listadoUsuarios.forEach((element: any): void => {
          //Si el nombre de usuario ingresado es igual al guardado 
          if(element.nombre==this.auxNombre){
            //Si la contraseña es igual a la guardada
            if(element.clave==this.auxClave1){
              this.encontrado = "SI";
            } 
          }
        });
      } 
  

      if (this.encontrado=="SI"){
        this.auxNombre="";
        this.auxClave1="";
        this.auxClave2="";
        document.getElementById("floatingInput")?.focus();    

      }else {
        this.miUsuario.guardar();
        this.miServicio.UsuarioActual=this.auxNombre;
        this.router.navigate(["/juegos"]);

      }






    }
    else 
    {
      alert("Las claves son diferentes ..... Vuelva cargar los datos");
      //this.auxNombre="";
      this.auxClave1="";
      this.auxClave2="";
      document.getElementById("floatingPassword")?.focus();
    }
  }

  ngOnInit(): void {
  }

}
