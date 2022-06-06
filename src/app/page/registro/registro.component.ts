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

  miUsuario: Usuarios;
  
  constructor(public router:Router, public miServicio:AuthService) { 
    this.miUsuario= new Usuarios();
    this.auxClave1="";
    this.auxClave2="";
    this.auxNombre="";
  }
  registrar(){
    if(this.auxClave1==this.auxClave2)
    {
      this.miUsuario.nombre=this.auxNombre;
      this.miUsuario.clave=this.auxClave1;
      this.miUsuario.guardar();
      //document.cookie="USUARIO="+this.auxNombre; //Esto era para utilizar una Cookie, ya no lo uso
      this.miServicio.UsuarioActual=this.auxNombre;
      this.router.navigate(["/juegos"]);
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
