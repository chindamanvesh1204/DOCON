import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dilague',
  templateUrl: './dilague.component.html',
  styleUrls: ['./dilague.component.css']
})
export class DilagueComponent implements OnInit {

  jsondata:any;



  constructor(public _user:UserService,public dialog: MatDialog) {

    this._user.getdata().subscribe((data)=>{

      console.log(data)
      this.jsondata=data
    })
  }

  ngOnInit(): void {
  }

}
