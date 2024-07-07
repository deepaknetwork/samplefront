import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, CardTextDirective, CardTitleDirective, ColComponent, RowComponent, TableDirective, TextColorDirective } from '@coreui/angular';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule,RowComponent, NgFor, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  deals: any[] = [];
  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },];
  constructor( private http: HttpClient) {}
  ngOnInit(): void {
    const userDetail = { id:localStorage.getItem("anorgcustomerid") };

    this.http.post<any[]>('https://localhost:7159/customer/projects', userDetail)
      .subscribe(
        response => {
          this.deals = response;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  viewproject(i:any){
    localStorage.setItem("customerviewproject",JSON.stringify(i))
    location.href="/#/viewproject"
  }

}
