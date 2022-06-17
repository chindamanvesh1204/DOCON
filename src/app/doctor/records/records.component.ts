import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';
import { ConfirmComponent } from '../confirm/confirm.component';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  displayedColumns: string[] = ['index','firstname', 'lastname', 'date','gender', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  getmatter: any;
  
   applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

getAlldata(){
  this.api.getcommentsdata().subscribe({
    next:(res:any)=>{ 
      this.getmatter=res;
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      console.log('getAlldata',res)
    },
    error:()=>{  
      alert('error occured')
    }   
  })
}
 
deletedata(id:number){
  if(confirm('are u  sure want to delete ')==true){
       this.api.deletedata(id).subscribe({
        next:(res)=>{
           console.log(res);
            alert('deleted successfully')
            this.getAlldata();
  },
  error:()=>{
          alert('error found while deleting')
        }
    })
  }
} 


editdata(row:any){
  this.matdialog.open(ConfirmComponent,{width:'30%',data:row}).afterClosed().subscribe(val=>{ 
    if(val =='update'){
      this.getAlldata()
    }
  });

}
  constructor(private api:UserService,private matdialog:MatDialog) { 
  }

  ngOnInit(): void {	  
	    this.getAlldata()
  }

}
