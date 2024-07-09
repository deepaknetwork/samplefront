import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModule, ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-viewproject',
  standalone: true,
  imports: [CommonModule,ModalModule,HttpClientModule,ReactiveFormsModule,FormModule],
  templateUrl: './viewproject.component.html',
  styleUrl: './viewproject.component.scss'
})
export class ViewprojectComponent implements OnInit{

  deal: any;
  projectForm1: FormGroup; 
  projectForm2: FormGroup; 
  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.projectForm1 = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
    this.projectForm2 = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

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
  onSubmit() {
    const dateTimeString = `${this.projectForm1.value.date}T${this.projectForm1.value.time}`;

    this.http.post('https://localhost:7159/admin/projectcall', { id:this.deal.id,time:dateTimeString})
      .subscribe(response => {
        console.log('DateTime saved', response);
      }, error => {
        console.error('Error saving DateTime', error);
      });
  }
  onSubmit1() {
    const dateTimeString = `${this.projectForm2.value.date}T${this.projectForm2.value.time}`;

    this.http.post('https://localhost:7159/admin/addmeet', { projectId:this.deal.id,link:this.projectForm2.value.link,time:dateTimeString})
      .subscribe(response => {
        console.log('DateTime saved', response);
      }, error => {
        console.error('Error saving DateTime', error);
      });
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
