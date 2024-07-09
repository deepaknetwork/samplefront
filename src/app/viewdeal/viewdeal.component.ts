import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { OnInit  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CoreUIIconsComponent } from '../views/icons/coreui-icons.component';
import { ButtonDirective, FormModule, ModalModule, ModalTitleDirective, ModalToggleDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewdeal',
  standalone: true,
  imports: [CommonModule,ModalModule,HttpClientModule,FormModule,ReactiveFormsModule],
  templateUrl: './viewdeal.component.html',
  styleUrl: './viewdeal.component.scss'
})
export class ViewdealComponent implements OnInit {
  deal: any;
  projectForm: FormGroup; 
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.projectForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    const data = localStorage.getItem("customerviewdeal");
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
    const dateTimeString = `${this.projectForm.value.date}T${this.projectForm.value.time}`;

    this.http.post('https://localhost:7159/admin/dealcall', { id:this.deal.id,time:dateTimeString})
      .subscribe(response => {
        console.log('DateTime saved', response);
      }, error => {
        console.error('Error saving DateTime', error);
      });
  }
  sch(){
    this.http.post('https://localhost:7159/admin/dealcall',{id:this.deal.id,time:9})
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/deals"
    }, error => {
      console.log(error)
    });
  }
  acc(){
    this.http.post('https://localhost:7159/admin/acceptproject',{id:this.deal.id})
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/projects"
    }, error => {
      console.log(error)
    });
  }
  can(){
    this.http.post('https://localhost:7159/admin/projectdealstatus',{id:this.deal.id,status:"cancled"})
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/deals"
    }, error => {
      console.log(error)
    });
  }
}
