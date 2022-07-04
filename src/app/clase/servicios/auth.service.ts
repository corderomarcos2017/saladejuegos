import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UsuarioActual:string;
  ppt:string;
  ttt:string;
  adv:string;
  aho:string;
  tri:string;
  clave:string;
  constructor() { 
    this.UsuarioActual="";
    this.UsuarioActual="";
    this.ppt="";
    this.ttt="";
    this.adv="";
    this.aho="";
    this.tri="";
    this.clave=""
  }
}
