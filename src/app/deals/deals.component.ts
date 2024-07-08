import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, CardTextDirective, CardTitleDirective, ColComponent, RowComponent, TableDirective, TextColorDirective } from '@coreui/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [HttpClientModule,CommonModule,TableDirective,RowComponent, NgFor, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent implements OnInit{
  deals: any[] = [];
  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },];
  constructor( private http: HttpClient,private router:Router) {}
  ngOnInit(): void {
    // const userDetail = { id:localStorage.getItem("anorgcustomerid") };

    this.http.get<any[]>('https://localhost:7159/admin/projectdeals')
      .subscribe(
        response => {
          this.deals = response;
          console.log(this.deals);
        },
        error => {
          console.log(error);
        }
      );
  }
  viewdeal(d:any){
    localStorage.setItem("customerviewdeal",JSON.stringify(d))
    location.href="/#/viewdeal"
  }
  newdeal(){
    location.href="/#/newdeal"
  }
}
