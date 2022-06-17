import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

@ViewChild('email') emailkey!: ElementRef;
  hide: boolean = false;

  loginForm: FormGroup = this.formbuild.group({
    email: ['', [Validators.required, ]],
    password: ['', [Validators.required, ]]
  })

  
  onLogin() {
    localStorage.setItem("email",this.emailkey.nativeElement.value)
 //  this._user.ValidateUser(this.loginForm.value['email'],this.loginForm.value['password'])
    if (this.loginForm.valid) {
  // localStorage.setItem("email",this.loginForm.value["email"]);
    //localStorage.setItem("password",this.loginForm.value["password"]);
       alert('success')
       this._rtr.navigate(['/sidenav'])
     } else{
      alert("error")
    }
    console.log(this.loginForm.value);
  }
  
  
  constructor(private _user:AdminService, private formbuild: FormBuilder,private _rtr:Router) { }

  ngOnInit(): void {
  }

}
