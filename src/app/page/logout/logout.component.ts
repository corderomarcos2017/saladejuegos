import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public miServicio:AuthService, public router:Router) {
    if (this.miServicio.UsuarioActual!=""){
      this.miServicio.UsuarioActual="";
      this.router.navigate(["/inicio"]);
    }

   }

  ngOnInit(): void {
  }

}
