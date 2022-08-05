import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Auth Guard is called");

    //check the user is logged in

    let isLoggedIn = localStorage.getItem("IS_LOGGED_IN");
    if(isLoggedIn) {
      // alert("Allow the user to proceed");
      return true;
    }
    else {
      alert("Please login.");
      window.location.href = "/auth/login";
      return false;
    }
    return false;
  }
  
}
