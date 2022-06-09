import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  posi=['-','-','-','-','-','-','-','-','-'];

  Jugador:string;
  hayganador:string;
  elGanadorEs:string;
  constructor(private miRouter:Router, public miServicio:AuthService) {
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
      
      if(this.verificarGanador("X")=="X") this.elGanadorEs="Jugador X";
      
      this.JuegaMaquina();
      if(this.verificarGanador("O")=="O") this.elGanadorEs="Jugador O";
    

      //this.cambiarJugador();
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
        this.hayganador="SI"; 
    }
    return retorno;
  }
  /*-----------------------------------------------------------------------------------*/
  ngOnInit(): void {
  }

}
