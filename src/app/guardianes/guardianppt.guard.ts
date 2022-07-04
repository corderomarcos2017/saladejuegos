import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../clase/servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianpptGuard implements CanActivate {
  constructor(public miServicio:AuthService, public miRouter:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.info("miServicio.ppt:",this.miServicio.ppt);
    if(this.miServicio.ppt=="SI"){
      return true;
    } else {
      this.miRouter.navigate(["/NoEstaSuscripto"]);
      return false;
    }
  }
  
}
