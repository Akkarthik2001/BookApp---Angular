import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks() {
    const url = "http://localhost:3000/books";
    return this.http.get(url);
  }

  getBook(id:number) {
    const url = "http://localhost:3000/books/" + id;
    return this.http.get(url);
  }
}
