import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class LoginpageGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if(localStorage.getItem('email')==null && localStorage.getItem('password')==null){
        return false
      }else{
      return true;
      }
  }
  
}

