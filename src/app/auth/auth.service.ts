import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:any) {
    const url = "http://localhost:3000/users";
    return this.http.post(url,user);
  }

  login() {
    
  }
}
