import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  ValidateUser(email:any,password:any ){
    return true;
  }

  constructor() { }
}
