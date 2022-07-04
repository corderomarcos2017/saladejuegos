import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { Usuarios } from 'src/app/clase/usuarios';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  misUsuarios:Usuarios;
  usuarioBuscado:string;
  listado:any[];

  constructor(public miServicio:AuthService, public miRouter:Router) { 
    this.misUsuarios= new Usuarios();
    this.usuarioBuscado="";
    this.listado = this.misUsuarios.generarListadoDeUsuarios();
    console.info("Listado de Usuario:", this.listado);
  }
  Buscar(){
    console.info("UsuarioBuscado:",this.usuarioBuscado);
   
    let listadoUsuarios=[];
    let encontrado = "NO";
    //Recupero todos los datos del localstorage
    listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
    //console.info("Matriz : ", listadoUsuarios);
    if(Object.entries(listadoUsuarios).length!=0){
        //recorro todo el contenido de la matriz
        listadoUsuarios.forEach((element: any): void => {
            //Si el nombre de usuario ingresado es igual al guardado 
            if(element.nombre==this.usuarioBuscado){
            //Si la contraseña es igual a la guardada
              this.listado=[element.nombre,element.clave,element.adv,element.aho,element.ppt,element.tri,element.ttt];
            }
        });
    }
  }
  
  Ejecutar(miNombre:Usuarios){
    console.info("MiNombre:",miNombre);

    this.miServicio.UsuarioActual=miNombre.nombre;
    this.miServicio.clave=miNombre.clave;
    this.miServicio.adv=miNombre.adv;
    this.miServicio.aho=miNombre.aho;
    this.miServicio.ppt=miNombre.ppt;
    this.miServicio.tri=miNombre.tri;
    this.miServicio.ttt=miNombre.ttt;

    this.miRouter.navigate(["/SuscripcionAltas"]);

  }
  ngOnInit(): void {
  }

}
