import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
  import{ DilagueComponent } from '../dilague/dilague.component';
import { SlottimingsComponent } from '../slottimings/slottimings.component';
import { ViewalltimingsComponent } from '../viewalltimings/viewalltimings.component';
  
@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
// for single inp//
  nextavalible:string="Nextavalible:"
// for date//
  date: Date=new Date();  
  jsondata:any;

 viewalltimings(){
   this.dialog.open(ViewalltimingsComponent,{
     width:'35%',
   })
 }

openDialog() {
  this.dialog.open(DilagueComponent,{
    width:'35%',
  });
  };

openslottimings() {
  this.dialog.open(SlottimingsComponent, 
   );
  };

   constructor( public _user:UserService,public dialog: MatDialog) {
   }

  ngOnInit(): void {
    
  this._user.getdata().subscribe(data=>{
    console.log(data);
    this.jsondata=data;
  })


  }

}
