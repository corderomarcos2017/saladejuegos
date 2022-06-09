import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-adivinador',
  templateUrl: './adivinador.component.html',
  styleUrls: ['./adivinador.component.css']
})
export class AdivinadorComponent implements OnInit {
  numero:number;
  valor:number;
  estado:number;
  intentos:number;
  intentosMax:number;
  hayganador:string;
  elGanadorEs:string;
  
  constructor(public miServicio:AuthService) { 
    this.numero=0;
    this.valor=0;
    this.estado=0;
    this.intentos=0;
    this.intentosMax=5;
    this.hayganador="";
    this.elGanadorEs="";
  }
  Nuevo(){
    this.numero=0;
    this.valor=0;
    this.estado=0;
    this.intentos=0;
    this.intentosMax=5;
    this.hayganador="";
    this.elGanadorEs="";
   // this.miRouter.navigate(["/juegos/ppt"]);
}
  IniciarJuego(){
    this.numero=Math.floor(Math.random() * (100-1)) + 1;
    console.log("El numero es:"+this.numero);
  }
  verificar(){
    if(this.numero==this.valor){
      this.intentos=this.intentosMax;
      this.estado=1;
    } else if(this.numero<this.valor){
      this.estado=2;
      document.getElementById("idValor")?.focus();      
    } else {
      this.estado=3;
      document.getElementById("idValor")?.focus(); 
    }
    this.intentos++;

    if(this.intentos>=this.intentosMax){
      if(this.estado==1){
        this.elGanadorEs=this.miServicio.UsuarioActual;
      }else{
        this.elGanadorEs="MAQUINA"
      }
    }
  
   // console.log("El numero es:"+this.numero);
  }

  ngOnInit(): void {
  }

}
