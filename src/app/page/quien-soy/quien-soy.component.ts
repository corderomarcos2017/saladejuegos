import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/clase/github';
import { ServicioGitHubService } from 'src/app/clase/servicios/servicio-git-hub.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  
  githubPerson: Github=new Github('');
 /*------------------------------------------------------------------*/
  constructor(public github: ServicioGitHubService) { 

  }
  /*------------------------------------------------------------------*/
  tomaDatosGithub(): void{
    this.github.getDatos().subscribe(response => {
      this.githubPerson = new Github(response);
      //console.log(response)
      console.log("Variable response",response);
    })
  }
  ngOnInit(): void {
    this.tomaDatosGithub();
    console.info(" la clase gitHubPeron ", this.githubPerson)
  }

}
