import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  projectName!:string;

  @Input()
  isLoggedIn!:boolean;
  
  @Output('logoutevent') outputEvent = new EventEmitter<string>();

  logout() {
    alert("Successfully Logged out");
    localStorage.clear();

    this.outputEvent.emit("logout123");
    window.location.href = "/auth/login"
  }
}
