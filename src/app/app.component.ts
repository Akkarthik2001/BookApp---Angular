import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  projectName = "BookApp";
  isLoggedIn = false;

  constructor() {

  }

  ngOnInit(): void {
    let isLoggedInStr = localStorage.getItem("IS_LOGGED_IN");
    this.isLoggedIn = isLoggedInStr != null ? Boolean(isLoggedInStr): false;
  }

  logout(event:any) { 
    console.log(event);
    this.isLoggedIn = false;
  }
}
