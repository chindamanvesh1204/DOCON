import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ClinicComponent } from './clinic/clinic.component';
import { HomeComponent }   from './home/home.component';
import { LogoutComponent }   from './logout/logout.component';
import { MydoctorsComponent} from './mydoctors/mydoctors.component';
import { RecordsComponent } from './records/records.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SupportComponent } from './support/support.component';



const routes: Routes = [
  {path:"sidenav",component:SidenavComponent,children:[ {path:"mydoctors",component:MydoctorsComponent,children:[ {path:"about",component:AboutComponent}]}],},
  {path:"sidenav",component:SidenavComponent,children:[ {path:"mydoctors",component:MydoctorsComponent,children:[ {path:"clinic",component:ClinicComponent}]}],},
  
  {path:"sidenav",component:SidenavComponent,children:[  {path:"home",component:HomeComponent,children:[  {path:"logout",component:LogoutComponent},]}]},
  {path:"sidenav",component:SidenavComponent,children:[  {path:"records",component:RecordsComponent}]},
  {path:"sidenav",component:SidenavComponent,children:[  {path:"appointment",component:AppointmentComponent}]},
  {path:"sidenav",component:SidenavComponent,children:[ {path:"support",component:SupportComponent}]},
  {path:"about",component:AboutComponent},
  {path:"logout",component:LogoutComponent},
  {path:"sidenav",component:SidenavComponent,children:[  {path:"home",component:HomeComponent,children:[{path:'mydoctors',component:MydoctorsComponent}]}]},

];
exports:[
  SidenavComponent,
  RecordsComponent,
  AboutComponent,
  ClinicComponent,
   HomeComponent,
  AppointmentComponent,

]
  

 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
