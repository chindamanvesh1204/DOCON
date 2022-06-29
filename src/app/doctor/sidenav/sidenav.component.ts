import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  logout(){
  
    localStorage.clear()
    this._rtr.navigate(['/login'])
  }

  constructor(private _rtr:Router) { }

  ngOnInit(): void {
  }

}
