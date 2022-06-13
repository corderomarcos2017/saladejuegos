import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { UsuarioTTT } from 'src/app/clase/usuario-ttt';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  miUsuarioTTT:UsuarioTTT;
  posi=['-','-','-','-','-','-','-','-','-'];

  Jugador:string;
  hayganador:string;
  elGanadorEs:string;
  constructor(private miRouter:Router, public miServicio:AuthService) {
    this.miUsuarioTTT=new UsuarioTTT();

    this.Jugador="X";
    this.hayganador="NO";
    this.elGanadorEs="";
    
   }
   Nuevo(){
    this.Jugador="X";
    this.hayganador="NO";
    this.elGanadorEs="";
    this.posi=['-','-','-','-','-','-','-','-','-'];
   // this.miRouter.navigate(["/juegos/ppt"]);
}
   /*-----------------------------------------------------------------------------------*/
  botonPresionado(fila:number) {
    if (this.posi[fila]=='-') {
      
      //Asignar la letra X u O a la fila y columna correspondiente
      this.posi[fila]=this.Jugador;
      
      if(this.verificarGanador("X")=="X"){
        this.elGanadorEs="Jugador X";
        this.hayganador="SI";
        this.AlmacenarUsuarioYPuntuacionTTT();
      } else {
       // this.JuegaMaquina();
        if(this.verificarGanador("O")=="O") {
          this.elGanadorEs="Jugador O";
          this.hayganador="SI";
          this.AlmacenarUsuarioYPuntuacionTTT();
        } else {
          //Si es empate hacer todo esto
          let Esempate="SI";
          for(let i=0;i<9;i++){
            if(this.posi[i]=='-'){
              Esempate="NO";
            }
          }
          if(Esempate=="SI") {
            this.hayganador="SI";
            this.elGanadorEs="EMPATE..";      
          }
        }        
      }
      this.cambiarJugador();
    }
  }
  /*-----------------------------------------------------------------------------------*/
  AlmacenarUsuarioYPuntuacionTTT(){
    let encontrado ="NO"; //Si no existe el usuario Actual, agrego uno nuevo al JSON
    //Recupero todos los datos del localstorage
    let listadoUsuariosTTT = JSON.parse(localStorage.getItem("listadoTTT") || "{}");
    
    if(Object.entries(listadoUsuariosTTT).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuariosTTT.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.miServicio.UsuarioActual){
            encontrado = "SI";
            if(this.elGanadorEs=="Jugador X") element.partidosGanados++;
            if(this.elGanadorEs=="Jugador O") element.partidosPerdidos++;
            localStorage.setItem('listadoTTT',JSON.stringify(listadoUsuariosTTT));
        }
      });
  
    } 

    if (encontrado=="NO"){
      //Agregar uno nuevo al objeto JSON
      this.miUsuarioTTT.nombre=this.miServicio.UsuarioActual ;
      this.miUsuarioTTT.fecha=new Date();
      if(this.elGanadorEs=="Jugador X") this.miUsuarioTTT.partidosGanados=1; else this.miUsuarioTTT.partidosGanados=0;
      if(this.elGanadorEs=="Jugador O") this.miUsuarioTTT.partidosPerdidos=1; else this.miUsuarioTTT.partidosPerdidos=0;
      this.miUsuarioTTT.guardarNuevoTTT();
    }
  }
  /*-----------------------------------------------------------------------------------*/
  cambiarJugador(){
    if(this.Jugador=="X"){
      this.Jugador="O";
    }else{
      this.Jugador="X";
    }
  } 
  /*-----------------------------------------------------------------------------------*/
  iniciar() {
    for(let f=0;f<9;f++)
        this.posi[f]='-';
  }
  /*-----------------------------------------------------------------------------------*/
  JuegaMaquina() {
    let salir="NO";
    if(this.posi[4]=='-'){
      this.posi[4]='O';
    } else {
      for(let f=0;f<9;f++){
          if(this.posi[f]=='-'){
            this.posi[f]='O';
            salir="SI";
            break;
          }
      }
    }
  }
  /*-----------------------------------------------------------------------------------*/
  verificarGanador(valor: string) {
    let retorno = "";
    if (this.posi[0]==valor && this.posi[1]==valor && this.posi[2]==valor ||
        this.posi[3]==valor && this.posi[4]==valor && this.posi[5]==valor ||
        this.posi[6]==valor && this.posi[7]==valor && this.posi[8]==valor ||
        this.posi[0]==valor && this.posi[3]==valor && this.posi[6]==valor ||
        this.posi[1]==valor && this.posi[4]==valor && this.posi[7]==valor ||
        this.posi[2]==valor && this.posi[5]==valor && this.posi[8]==valor ||
        this.posi[0]==valor && this.posi[4]==valor && this.posi[8]==valor ||
        this.posi[2]==valor && this.posi[4]==valor && this.posi[6]==valor) 
    {
      retorno = valor;  
    }
    return retorno;
  }
  
  ngOnInit(): void {
  }

}
