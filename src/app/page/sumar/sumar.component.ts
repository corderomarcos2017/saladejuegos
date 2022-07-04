import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { UsuarioSuma } from 'src/app/clase/usuario-suma';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
  miUsuarioTRI:UsuarioSuma;
  a:number;
  b:number;
  c:number;
  resultado:String;
  estado:number;
  //----------------------------------------------------------------------------------------------------
  constructor(public miServicio:AuthService) {
    this.miUsuarioTRI=new UsuarioSuma();
    this.a=0;
    this.b=0;
    this.c=0;
    this.resultado="";
    this.estado=0;
   }
   //----------------------------------------------------------------------------------------------------
   comprobar(){
    if(this.a<=(this.b+this.c) && this.b<=(this.a+this.c) && this.c<=(this.a+this.b)) {
      if(this.a==this.b && this.b==this.c ){
       this.resultado="El triangulo es equilatero!!! GANASTE.";
      } else if(this.a!=this.b && this.a!=this.c && this.b!=this.c ){ 
        this.resultado="El triangulo es escaleno!!! GANASTE.";
      } else {
        this.resultado="El triangulo es Isosceles!!! GANASTE.";
      } 
      this.estado=1; //gano
    } else {
      this.resultado="El triangulo Invalido!! PERDISTE....";
      this.estado=2 //perdio
    }
    this.AlmacenarUsuarioYPuntuacion();
   }
   //----------------------------------------------------------------------------------------------------
   AlmacenarUsuarioYPuntuacion(){
    let encontrado = 0; //Si no existe el usuario Actual, agrego uno nuevo al JSON
    //Recupero todos los datos del localstorage
    let listadoUsuariosTRI = JSON.parse(localStorage.getItem("listadoTRI") || "{}");
    
    if(Object.entries(listadoUsuariosTRI).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuariosTRI.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.miServicio.UsuarioActual){
            encontrado = 1;
            if(this.estado==1) element.partidosGanados++;
            if(this.estado==2) element.partidosPerdidos++;
            localStorage.setItem('listadoTRI',JSON.stringify(listadoUsuariosTRI));
        }
      });

    } 

    if (encontrado==0){
      //Agregar uno nuevo al objeto JSON
      this.miUsuarioTRI.nombre=this.miServicio.UsuarioActual ;
      this.miUsuarioTRI.fecha=new Date();
      if(this.estado==1){
        this.miUsuarioTRI.partidosGanados=1;
        this.miUsuarioTRI.partidosGanados=0;
      } 
      if(this.estado==2) {
        this.miUsuarioTRI.partidosGanados=0;
        this.miUsuarioTRI.partidosGanados=1;       
      } 

      this.miUsuarioTRI.guardarNuevoSuma();
    }

  } 
  //---------------------------------------------------------------------------------------------
  Nuevo(){
    this.a=0;
    this.b=0;
    this.c=0;
    this.resultado="";
    this.estado=0;
  }
  ngOnInit(): void {
  }

}
