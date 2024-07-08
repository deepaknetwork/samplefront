import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { OnInit  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CoreUIIconsComponent } from '../views/icons/coreui-icons.component';
import { ButtonDirective, ModalModule, ModalTitleDirective, ModalToggleDirective } from '@coreui/angular';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewdeal',
  standalone: true,
  imports: [CommonModule,ModalModule,HttpClientModule],
  templateUrl: './viewdeal.component.html',
  styleUrl: './viewdeal.component.scss'
})
export class ViewdealComponent implements OnInit {
  deal: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
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
  sch(){
    this.http.post('https://localhost:7159/customer/projectdeal',)
    .subscribe(response => {
      //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
      //this.router.navigate(['/homec']);
      location.href="/#/viewdeal"
    }, error => {
      console.log(error)
    });
  }
}
