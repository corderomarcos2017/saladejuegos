import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  posi=[['-','-','-'],
        ['-','-','-'],
        ['-','-','-']];

  Jugador:string;
  hayganador:string;
  elGanadorEs:string;
  constructor(private miRouter:Router, public miServicio:AuthService) {
    this.Jugador="X";
    this.hayganador="NO";
    this.elGanadorEs="";
    
   }
  botonPresionado(fila:number,columna:number) {
    if (this.posi[fila][columna]=='-') {
      
      //Asignar la letra X u O a la fila y columna correspondiente
      this.posi[fila][columna]=this.Jugador;
      
      if(this.verificarGanador("X")=="X") this.elGanadorEs="Jugador X";
      
      this.JuegaMaquina();
      if(this.verificarGanador("O")=="O") this.elGanadorEs="Jugador O";
    

      //this.cambiarJugador();
    }
  }
  cambiarJugador(){
    if(this.Jugador=="X"){
      this.Jugador="O";
    }else{
      this.Jugador="X";
    }
  } 
  iniciar() {
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posi[f][c]='-';
  }
  JuegaMaquina() {
    let salir="NO";
    if(this.posi[1][1]=='-'){
      this.posi[1][1]='O';
    } else {
      for(let f=0;f<3;f++){
        for(let c=0;c<3;c++){
          if(this.posi[f][c]=='-'){
            this.posi[f][c]='O';
            salir="SI";
            break;
          }
        }
        if(salir=="SI"){
          break;
        }
      }
    }
  }
  verificarGanador(valor: string) {
    let retorno = "";
    if (this.posi[0][0]==valor && this.posi[0][1]==valor && this.posi[0][2]==valor ||
        this.posi[1][0]==valor && this.posi[1][1]==valor && this.posi[1][2]==valor ||
        this.posi[2][0]==valor && this.posi[2][1]==valor && this.posi[2][2]==valor ||
        this.posi[0][0]==valor && this.posi[1][0]==valor && this.posi[2][0]==valor ||
        this.posi[0][1]==valor && this.posi[1][1]==valor && this.posi[2][1]==valor ||
        this.posi[0][2]==valor && this.posi[1][2]==valor && this.posi[2][2]==valor ||
        this.posi[0][0]==valor && this.posi[1][1]==valor && this.posi[2][2]==valor ||
        this.posi[0][2]==valor && this.posi[1][1]==valor && this.posi[2][0]==valor) 
    {
        retorno = valor;  
        this.hayganador="SI"; 
    }
   
    return retorno;
  }
  
  ngOnInit(): void {
  }

}
