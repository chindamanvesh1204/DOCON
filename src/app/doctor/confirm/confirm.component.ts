import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  jsondata:any;
  actionbtn:string='submit';
  actionhead:string='Create New Patient Name'
  //loginfrm ! :FormGroup;

    loginfrm =new FormGroup({
    firstname :new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    gender:new FormControl(''),
    time:new FormControl('')
   });

 
  postuserinfo(use:any){
if (!this.editData){
 if(this.loginfrm.valid){
    this._http.post('http://localhost:3000/doctorsappointment',use)
   .subscribe((result)=>{
     console.log("result",result)
     this.dialgeRef.close('save')
   })
  }else{
   alert('error occured during adding details')
 }

 }else {
 this.updatetheuserinfo()
}
  
  }


  updatetheuserinfo(){

    this.api.putdata(this.loginfrm.value,this.editData.id)
    .subscribe({
      next:()=>{
        alert('patient details updated successfully')
         this.dialgeRef.close('save')
         this.loginfrm
      },error:()=>{
        alert('error occured while editing the details')
        
      }
    })
  }
    
  constructor(
              private api:UserService,
              private formbuilder:FormBuilder,
              private _http:HttpClient,
              @Inject(MAT_DIALOG_DATA)public editData:any,
               private dialgeRef:MatDialogRef<ConfirmComponent>,
              ) { }

  ngOnInit(): void {  

        
  this.api.getdata().subscribe(data=>{
    console.log(data);
    this.jsondata=data;
  })

    this. loginfrm = this.formbuilder.group({
    firstname :new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
  })
 console.log(this.editData)
  if (this.editData){
    this.actionhead='update patient details'
    this.actionbtn='update'
    this.loginfrm.controls['firstname'].setValue(this.editData.firstname);
    this.loginfrm.controls['lastname'].setValue(this.editData.lastname);
    this.loginfrm.controls['date'].setValue(this.editData.date);
    this.loginfrm.controls['gender'].setValue(this.editData.gender);
   }



  }

}
