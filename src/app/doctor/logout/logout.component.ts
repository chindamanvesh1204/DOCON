import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  email:any =" "
  constructor() { }
  ngOnInit(): void {
    this.email =localStorage.getItem('email');
  }
}
