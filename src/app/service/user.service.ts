import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {



getdata(){
 return this.api.get('http://localhost:3000/posts' ) 
}

getcommentsdata(){

  return this.api.get('http://localhost:3000/doctorsappointment')
  
 }
 deletedata(id:number){

  return this.api.delete('http://localhost:3000/doctorsappointment/'+id)
  
 }

 putdata(data:any,id:number){

  return this.api.put('http://localhost:3000/doctorsappointment/'+id,data)
  
 }

  constructor(private api:HttpClient) {

   }



   
}
