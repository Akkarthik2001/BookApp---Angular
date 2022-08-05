import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("RoleGuard ");
    //check the user is logged in

    let isLoggedIn = localStorage.getItem("IS_LOGGED_IN");
    let role = localStorage.getItem("ROLE"); 
    if(role == 'ADMIN') {
      // alert("Allow the user to proceed");
      return true;
    }
    else {
      alert("You are not authorized to access the page.");
      window.location.href = "/auth/login";
      return false;
    }
    return false;
  }
  
  
}
