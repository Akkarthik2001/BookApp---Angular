import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  stars = [];

  ngOnInit(): void {
    console.log("OnInit: " + this.rating);
  }

  @Input()
  rating!:number;

  ngOnChanges() {
    console.log("OnChange: " + this.rating);
  }

}
