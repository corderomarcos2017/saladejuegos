import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { UsuarioAho } from 'src/app/clase/usuario-aho';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  miUsuarioAHO:UsuarioAho;
  palabras=['perro','cocodrilo','elefante','vaca','caballo','burro','jirafa','gato','hipopotamo','tigre'];
  
  abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
 
 
  palabra:string;
  ingresada:string;
 

  numero:number;
  estado:number;
  intentos:number;
  intentosMax:number;
  miImagen:string;

  hayganador:string;
  elGanadorEs:string;
  habilitar:boolean;

  palabraArray:string[];
  guionesArray:string[];
  botonesArray:string[];

  /*------------------------------------------------------------------------------------------*/
  constructor(public miServicio:AuthService) {
    this.miUsuarioAHO=new UsuarioAho();
    this.numero=0;
    this.estado=0;
    this.intentos=0;
    this.intentosMax=0;
    this.hayganador="";
    this.elGanadorEs="";
    this.miImagen="../../../assets/0.png";
    this.palabra="";
    this.ingresada="";

    this.palabraArray=[];
    this.guionesArray=[];
    this.botonesArray=[];

    this.habilitar=false;


    this.IniciarJuego();

  }
  /*------------------------------------------------------------------------------------------*/
  NuevoJuego()     { this.IniciarJuego(); }
  /*------------------------------------------------------------------------------------------*/  
  numeroAleatorio(){ this.numero=Math.floor(Math.random() * (10-1));  }
  /*------------------------------------------------------------------------------------------*/ 
  ObtenerPalabra() { this.palabra=this.palabras[this.numero];  }
  /*------------------------------------------------------------------------------------------*/ 
  cantidadLetras() { return this.palabra.length; }
  /*------------------------------------------------------------------------------------------*/ 
  generarPalabraArray(){
    this.palabraArray=this.palabras[this.numero].split("");
    //this.botonesArray=this.palabras[this.numero].split("");


    let contador = 0;
    let agregar="";
    this.botonesArray.push(this.palabraArray[0]);
    for (let i = 0; i < this.palabraArray.length; i++) {
      agregar ="S";
      for (let f = 0; f < this.botonesArray.length; f++) {
          if(this.botonesArray[f]== this.palabraArray[i]){
            agregar="N";
            break;
          }
      }
      if (agregar=="S"){
        this.botonesArray.push(this.palabraArray[i]);
      }
    }
    //----------------------------
    contador = 0;
    agregar="";

    for (let i = 0; i < this.abc.length; i++) {
      agregar ="S";
      for (let f = 0; f < this.botonesArray.length; f++) {
          if(this.botonesArray[f]== this.abc[i]){
            agregar="N";
            break;
          }
      }
      if (agregar=="S"){
        this.botonesArray.push(this.abc[i]);
        contador++;
      }
      if(contador==6){
        break;
      }
    }

    //Ordeno el array botonesArray
    this.botonesArray.sort ((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 :
    a.toLowerCase() < b.toLowerCase() ? -1:
    0);
  }  
  /*------------------------------------------------------------------------------------------*/ 
  generarGuines(){
    this.guionesArray=this.palabras[this.numero].split("");
    for (let index = 0; index < this.cantidadLetras(); index++) {
      this.guionesArray[index]="_ ";
    }  
  }
 /*------------------------------------------------------------------------------------------*/ 
  IniciarJuego(){
    this.intentos=0;
    this.estado=0;
    this.intentosMax=6;
    this.ingresada="";
    this.botonesArray=[];
    this.miImagen=this.imprimirImagen(this.intentos)
    this.numeroAleatorio(); //Eligjo aleatoriamente el nro de indice del array
    this.ObtenerPalabra();
    this.generarPalabraArray();
    this.generarGuines();
  }
/*-------------------------------------------------------------------------------------------*/ 
buscarLetra(seleccionado:string){
  let encontrado="NO";
  console.info("Seleccionado:", seleccionado);
  for (let index = 0; index < this.cantidadLetras(); index++) {
    if(this.palabraArray[index]==seleccionado){
      this.guionesArray[index]=seleccionado;
      encontrado="SI";
    } else {
 
    }
  } 
  console.info("encontrado",encontrado)
  if(encontrado=="NO")  this.ingresada+=seleccionado;
  return encontrado;
}
 /*------------------------------------------------------------------------------------------*/  
 losArraysSonIguales(){
  let retorno="SI";
  for (let index=0;index<this.cantidadLetras(); index++){
    if(this.palabraArray[index]!=this.guionesArray[index]){
      retorno="NO";
      break;
    }
  }
  return retorno;
 }
 /*------------------------------------------------------------------------------------------*/  
  jugar(valor:string){
    if(this.buscarLetra(valor)=="NO"){
      this.intentos++;
    }
    
    this.miImagen=this.imprimirImagen(this.intentos);

    if (this.losArraysSonIguales()=="SI" ){
        this.estado=1;
        this.AlmacenarUsuarioYPuntuacion();
    }
    if (this.intentos>=6){
        this.estado=2;
        this.AlmacenarUsuarioYPuntuacion();
    }
  }
  /*------------------------------------------------------------------------------------------*/ 
  imprimirImagen(vd:number){
    let retorno:any
    console.log("Variable vd:",vd);
    switch (vd) {
      case 0: retorno= "../../../assets/0.png"; break;
      case 1: retorno= "../../../assets/1.png"; break;
      case 2: retorno= "../../../assets/2.png"; break;
      case 3: retorno= "../../../assets/3.png"; break;
      case 4: retorno= "../../../assets/4.png"; break;
      case 5: retorno= "../../../assets/5.png"; break;
      case 6: retorno= "../../../assets/6.png"; break;
      default: retorno= "../../../assets/0.png"; break;
    }
    return retorno;
  }
  /*------------------------------------------------------------------------------------------*/
  AlmacenarUsuarioYPuntuacion(){
    let encontrado = 0; //Si no existe el usuario Actual, agrego uno nuevo al JSON
    //Recupero todos los datos del localstorage
    let listadoUsuariosAHO = JSON.parse(localStorage.getItem("listadoAHO") || "{}");
    
    if(Object.entries(listadoUsuariosAHO).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuariosAHO.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.miServicio.UsuarioActual){
            encontrado = 1;
            if(this.estado==1) element.partidosGanados++;
            if(this.estado==2) element.partidosPerdidos++;
            localStorage.setItem('listadoAHO',JSON.stringify(listadoUsuariosAHO));
        }
      });

    } 

    if (encontrado==0){
      //Agregar uno nuevo al objeto JSON
      this.miUsuarioAHO.nombre=this.miServicio.UsuarioActual ;
      this.miUsuarioAHO.fecha=new Date();
      
      if(this.estado==1) this.miUsuarioAHO.partidosGanados=1; 
        else this.miUsuarioAHO.partidosGanados=0;

      if(this.estado==2) this.miUsuarioAHO.partidosPerdidos=1; 
        else this.miUsuarioAHO.partidosPerdidos=0;
      
      this.miUsuarioAHO.guardarNuevoAHO();
    }

  } 
   /*------------------------------------------------------------------------------------------*/
  ngOnInit(): void {

  }

}
