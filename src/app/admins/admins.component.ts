import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, ColComponent, RowComponent, TableDirective } from '@coreui/angular';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [HttpClientModule,CommonModule,TableDirective,CardComponent,CardBodyComponent,CardFooterComponent,CardHeaderComponent,ColComponent,RowComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent implements OnInit {
  deals: any[] = [];
  constructor( private http: HttpClient) {}
  ngOnInit(): void {
    //const userDetail = { id:localStorage.getItem("anorgcustomerid") };

    this.http.get<any[]>('https://localhost:7159/admin/alladmins')
      .subscribe(
        response => {
          this.deals=response
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
