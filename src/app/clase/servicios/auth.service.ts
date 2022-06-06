import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UsuarioActual:string;
  constructor() { 
    this.UsuarioActual="";
  }
}
