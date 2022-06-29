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

  loginForm  = new FormGroup({
    email: new FormControl ('',[
                                 Validators.minLength(5),
                                 Validators.maxLength(10),
                                 Validators.required,
                                 // Validator.pattern//
                          
                              ]),
    password:new FormControl ('', [Validators.required,
                                   Validators.minLength(5),
                                   Validators.maxLength(10),
                                   //abcd//
                                
                                ])
  })

  
  onLogin() {
    localStorage.setItem("email",this.emailkey.nativeElement.value)
     if (this.loginForm.valid) {
        localStorage.setItem("email",this.loginForm.value["email"]);
        localStorage.setItem("password",this.loginForm.value["password"]);
        this._rtr.navigate(['/sidenav'])
     } else{
      alert("please enter min length 5 and max length 10 ")
    }
    console.log(this.loginForm.value);
  }
  
  constructor(private _user:AdminService,private _rtr:Router) { }

  ngOnInit(): void {
  }

}
