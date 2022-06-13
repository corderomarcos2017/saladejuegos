import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Github } from '../github';
@Injectable({
  providedIn: 'root'
})
export class ServicioGitHubService {
  url='https://api.github.com/users/corderomarcos2017';
  constructor(public http: HttpClient) {

   }
   getDatos(){
    return this.http.get<Github>(this.url);

  }
}
