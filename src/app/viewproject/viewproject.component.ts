import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-viewproject',
  standalone: true,
  imports: [CommonModule,ModalModule,HttpClientModule],
  templateUrl: './viewproject.component.html',
  styleUrl: './viewproject.component.scss'
})
export class ViewprojectComponent implements OnInit{

  deal: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const data = localStorage.getItem("customerviewproject");
    if (data) {
      try {
        this.deal = JSON.parse(data);
        console.log(this.deal);
      } catch (e) {
        console.error('Error parsing localStorage data', e);
      }
    } 
  }
  call(){
    this.http.post('https://localhost:7159/admin/projectcall',{id:this.deal.id,time:9})
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/calls"
    }, error => {
      console.log(error)
    });
  }
  meet(){
    this.http.post('https://localhost:7159/admin/addmeet',{projectId:this.deal.id,link:"https://hello",time:9})
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/meets"
    }, error => {
      console.log(error)
    });
  }
  edit(){
    alert("clicked alert")
    location.href="/#/editproject"
  }
}
