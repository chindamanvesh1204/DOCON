import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RecordsComponent } from './records/records.component';
import { AboutComponent } from './about/about.component';
import { ClinicComponent } from './clinic/clinic.component';
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { SupportComponent } from './support/support.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { DoctorService } from './service/doctor.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import {MatDialogModule} from '@angular/material/dialog';
import { AppointmentComponent } from './appointment/appointment.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DilagueComponent } from './dilague/dilague.component';
import { SlottimingsComponent } from './slottimings/slottimings.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ViewalltimingsComponent } from './viewalltimings/viewalltimings.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipe/filter.pipe';
  
 
 
     
@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    RecordsComponent,
    AboutComponent,
     ClinicComponent,
     MydoctorsComponent,
     SupportComponent,
     AppointmentComponent,
     LogoutComponent,
     DilagueComponent,
     SlottimingsComponent,
     ConfirmComponent,
     ViewalltimingsComponent,
    FilterPipe
      

     ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatSidenavModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule ,
    Ng2SearchPipeModule,
    FormsModule,
   
   ],
   providers: [ UserService,DoctorService],
})
export class DoctorModule { }
