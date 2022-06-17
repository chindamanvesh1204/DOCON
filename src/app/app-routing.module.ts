import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DoctorModule } from './doctor/doctor.module';
import { SidenavComponent } from './doctor/sidenav/sidenav.component';
import { LoginpageGuard } from './Guards/loginpage.guard';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"test",component:TestComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'sidenav',component:SidenavComponent,canActivate:[LoginpageGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
