import { Component } from '@angular/core';
import { AuthService } from './clase/servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto2';
  constructor(public miServicio:AuthService){
    
  }
}
