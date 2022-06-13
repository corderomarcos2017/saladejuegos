import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  palabras=['perro','cocodrilo','elefante','vaca','caballo','burro','jirafa','gato','hipopotamo','tigre'];
  
  abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
 
  seleccionado:string;
  palabra:string;
 
  guiones:string;
  valor:number;
  estado:number;
  intentos:number;
  intentosMax:number;
  miImagen:string;

  hayganador:string;
  elGanadorEs:string;
  /*------------------------------------------------------------------------------------------*/
  constructor(public miServicio:AuthService) {
    this.valor=0;
    this.estado=0;
    this.intentos=0;
    this.intentosMax=6;
    this.hayganador="";
    this.elGanadorEs="";
    this.miImagen="../../../assets/0.png";
    this.palabra="";
    this.seleccionado="";
    this.guiones="";
  }
 /*------------------------------------------------------------------------------------------*/  
  palabraAleatoria(){
    let numero
    numero=Math.floor(Math.random() * (10-1)) + 1; 
    this.palabra=this.palabras[numero];
  }
  /*------------------------------------------------------------------------------------------*/  
  IniciarJuego(){
    this.palabraAleatoria();
    this.calcularGuiones();
  }

 /*------------------------------------------------------------------------------------------*/ 
 cantidadLetras(){
  return this.palabra.length;
 }
/*------------------------------------------------------------------------------------------*/ 
 calcularGuiones(){
  for (let index = 0; index < this.cantidadLetras(); index++) {
    this.guiones+="_ ";
    
  }
 }
/*------------------------------------------------------------------------------------------*/ 
 obtenerPalabra(){
  let miPalabra=this.obtenerPalabraDelArray(2);
  console.log("miPalabra",miPalabra);
 }
/*------------------------------------------------------------------------------------------*/ 
 obtenerPalabraDelArray(indice:number){
  return this.palabras[indice].split("");
 }
 /*------------------------------------------------------------------------------------------*/  
  verificar(){
    this.intentos++;

    this.miImagen=this.imprimirImagen(this.intentos);


  }


  /*------------------------------------------------------------------------------------------*/ 
  imprimirImagen(vd:number){
    let retorno:any
    console.log("Variable vd:",vd);
    switch (vd) {
      case 1: retorno= "../../../assets/1.png"; break;
      case 2: retorno= "../../../assets/2.png"; break;
      case 3: retorno= "../../../assets/3.png"; break;
      case 4: retorno= "../../../assets/4.png"; break;
      case 5: retorno= "../../../assets/5.png"; break;
      case 6: retorno= "../../../assets/6.png"; break;
      default: retorno= "../../../assets/6.png"; break;
    }
    
    return retorno;
  }
  /*------------------------------------------------------------------------------------------*/
  ngOnInit(): void {

  }

}
