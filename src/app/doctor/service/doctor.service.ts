import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public productlist = new BehaviorSubject<any>([]);
  search: any;

  constructor() { }
}
