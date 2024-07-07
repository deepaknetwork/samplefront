import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  
  userData: any;
  meets: any;
  calls: any;
  projects: any;
  deals: any;
  constructor( private http: HttpClient) {}
  ngOnInit(): void {
    
    const userDetail = { id:localStorage.getItem("anorgcustomerid") };
    this.http.post<any>('https://localhost:7159/customer/meets', userDetail)
    .subscribe(
      response => {
        this.meets=response.length
      }
    );
    this.http.post<any>('https://localhost:7159/customer/calls', userDetail)
    .subscribe(
      response => {
        this.calls=response.length
      }
    );
    this.http.post<any>('https://localhost:7159/customer/projectdeals', userDetail)
    .subscribe(
      response => {
        this.deals=response.length
      }
    );
    this.http.post<any>('https://localhost:7159/customer/projects', userDetail)
    .subscribe(
      response => {
        this.projects=response.length
      }
    );
    this.http.post<any>('https://localhost:7159/customer/userdetail', userDetail)
      .subscribe(
        response => {
          this.userData=response
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
