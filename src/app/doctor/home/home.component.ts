import { Component, OnInit } from '@angular/core';
  import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm!: string;

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.doctorservice.search.next(this.searchTerm);
  }
  
  constructor( public doctorservice:DoctorService) { }

  ngOnInit(): void {
  }
 


}
