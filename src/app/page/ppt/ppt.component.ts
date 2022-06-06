import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { UsuarioPPT } from 'src/app/clase/usuario-ppt';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  miUsuarioPPT:UsuarioPPT;
  numeroUsuario:number;
  numeroMaquina:number;
  textUsuario:string;
  textMaquina:string;
  textGanador:string;
  verificado:string;
  puntosUsu:number;
  puntosMaq:number;
  permitir:string;

  constructor(private miRouter:Router, public miServicio:AuthService) { 
    this.miUsuarioPPT=new UsuarioPPT();
    this.numeroUsuario=1;
    this.numeroMaquina=0;

    this.textMaquina="";
    this.textUsuario="";

    this.textGanador="";

    this.verificado="NO"
    this.puntosUsu=0;
    this.puntosMaq=0;
    this.permitir="SI";
    
  }
  verificar(){
    if(this.permitir=="SI"){
      this.numeroMaquina=Math.floor(Math.random() * (4-1)) + 1; //del 1 al 3
      
      this.textUsuario= this.opcionElegina(Number(this.numeroUsuario));

      this.textMaquina= this.opcionElegina(this.numeroMaquina);

      this.textGanador=this.QuienGanoLaMano(this.numeroUsuario,this.numeroMaquina);
      this.quienGanoElJuego();
      this.verificado="SI";
    } 
  }
  Nuevo(){
      this.numeroUsuario=1;
      this.numeroMaquina=0;
      this.textMaquina="";
      this.textUsuario="";
      this.textGanador="";
      this.verificado="NO"
      this.puntosUsu=0;
      this.puntosMaq=0;
      this.permitir="SI";
     // this.miRouter.navigate(["/juegos/ppt"]);
  }

  quienGanoElJuego(){
    if(this.puntosMaq==3 || this.puntosUsu==3){
      this.permitir="NO";
      this.AlmacenarUsuarioYPuntuacion();
    }
  }
  opcionElegina(valor:number){
    let textoRetorno: string
    switch(valor){
      case 1:
        textoRetorno="Piedra";
        break;
      case 2:
        textoRetorno="Papel";
        break;
      case 3:
        textoRetorno="Tijeras";
        break;
      default:
        textoRetorno="OPCION INCORRETA";
        break;     
    }
    return textoRetorno;
  }

  QuienGanoLaMano(vUsu:number, vMaq:number){
    let retorno:string="";
    if(vUsu==vMaq){
      retorno="EMPATE";
    }
    if(vUsu==1 && vMaq==3 || vUsu==2 && vMaq==1 || vUsu==3 && vMaq==2){
      this.puntosUsu++;
      retorno="GANA USUARIO"
    }
    if(vUsu==1 && vMaq==2 || vUsu==2 && vMaq==3 || vUsu==3 && vMaq==1){
      this.puntosMaq++;
      retorno="GANA MAQUINA"
    }   
    return retorno;
  }
AlmacenarUsuarioYPuntuacion(){
    let encontrado = 0; //Si no existe el usuario Actual, agrego uno nuevo al JSON
    //Recupero todos los datos del localstorage
    let listadoUsuariosPPT = JSON.parse(localStorage.getItem("listadoPPT") || "{}");
    
    if(Object.entries(listadoUsuariosPPT).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuariosPPT.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.miServicio.UsuarioActual){
            encontrado = 1;
            if(this.puntosUsu>=3) element.partidosGanados++;
            if(this.puntosMaq>=3) element.partidosPerdidos++;
            localStorage.setItem('listadoPPT',JSON.stringify(listadoUsuariosPPT));
        }
      });

    } 

    if (encontrado==0){
      //Agregar uno nuevo al objeto JSON
      this.miUsuarioPPT.nombre=this.miServicio.UsuarioActual ;
      this.miUsuarioPPT.fecha=new Date();
      if(this.puntosUsu>=3) this.miUsuarioPPT.partidosGanados=1; 
        else this.miUsuarioPPT.partidosGanados=0;
      if(this.puntosMaq>=3) this.miUsuarioPPT.partidosPerdidos=1; 
        else this.miUsuarioPPT.partidosPerdidos=0;
      this.miUsuarioPPT.guardarNuevoPPT();
    }

  } 
  ngOnInit(): void {
  }

}
