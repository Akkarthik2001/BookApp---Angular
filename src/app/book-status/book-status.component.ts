import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.component.html',
  styleUrls: ['./book-status.component.css']
})
export class BookStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Book Status:" + this.status);
  }

  @Input()
  status!:string;
}
