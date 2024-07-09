import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule,FormModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

  data: any = {};
  constructor( private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:7159/admin/view')
    .subscribe(
      response => {
        this.data = response;
      },
      error => {
          console.log(error);
        }
    );
}
}
