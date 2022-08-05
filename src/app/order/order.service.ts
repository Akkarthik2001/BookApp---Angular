import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  createOrder(orderObj:any) {
    const url = "http://localhost:3000/orders";
    return this.http.post(url, orderObj);
  }

  cancelOrder(orderObj:any) {

  }

  deliverObj(orderObj:any) {
    
  }
}
