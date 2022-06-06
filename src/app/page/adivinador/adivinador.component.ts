import { Component, OnInit } from '@angular/core';

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
  
  constructor() { 
    this.numero=0;
    this.valor=0;
    this.estado=0;
    this.intentos=0;
  }
  IniciarJuego(){
    this.numero=Math.floor(Math.random() * (100-1)) + 1;
    console.log("El numero es:"+this.numero);
  }
  verificar(){
    if(this.numero==this.valor){
      this.estado=1;
    } else if(this.numero<this.valor){
      this.estado=2;
      document.getElementById("idValor")?.focus();      
    } else {
      this.estado=3;
      document.getElementById("idValor")?.focus(); 
    }
    this.intentos++;
   // console.log("El numero es:"+this.numero);
  }

  ngOnInit(): void {
  }

}
