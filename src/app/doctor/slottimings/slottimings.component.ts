import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-slottimings',
  templateUrl: './slottimings.component.html',
  styleUrls: ['./slottimings.component.css']
})
export class SlottimingsComponent implements OnInit {

  jsondata:any

  openconfirm() {
    this.dialog.open(ConfirmComponent,
      {
      width:'35%'
       });this.dialgeRef.close('confirm');
    
  }

  constructor(
              public _user:UserService,
              public dialog: MatDialog,
              private dialgeRef:MatDialogRef<ConfirmComponent>,
             ){

    this._user.getdata().subscribe((data)=>{

      console.log(data)
      this.jsondata=data
    })
  }

  ngOnInit(): void {

  }

}
