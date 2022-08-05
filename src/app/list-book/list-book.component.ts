import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private http: HttpClient, private bookService:BookService) { 
    console.log("ListBookComponent constructor");
  }

  ngOnInit(): void {
    console.log("Lifecycle Init method");
    this.getBooks();
  }

books!:any[];

title: string = "";

authors:any;

  getBooks() {
    // const url = "http://localhost:3000/books";
    this.authors = [];
    this.bookService.getAllBooks().subscribe( (res: any) => {
      console.log(res);
      this.books = res;
      for(let book of this.books) {
        let authorName = book.author;
        if(!this.authors.includes(authorName)) {
          this.authors.push(authorName);
        }
      }
    });
  }

  searchByStock(status:string){
    console.log("Search By Status:" + status);
  }


  searchByAuthor(author:any){
    console.log("Search By Author:" + author);
  }

  searchByPrice(){
    console.log("Search By Price");
  }
}
