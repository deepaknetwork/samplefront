import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoreUIIconsComponent } from '../views/icons/coreui-icons.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormCheckComponent, FormDirective } from '@coreui/angular';
import { FocusMonitor } from '@angular/cdk/a11y';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-newdeal',
  standalone: true,
  imports: [CommonModule,FormsModule,FormDirective,FormCheckComponent, ReactiveFormsModule,HttpClientModule],
  templateUrl: './newdeal.component.html',
  styleUrl: './newdeal.component.scss'
})
export class NewdealComponent implements OnInit {
  signupForm: FormGroup;
  platforms: string[] = ['Mobile', 'Web', 'Desktop', 'Software'];
  color: string = ''; 
  constructor(private fb: FormBuilder, private http: HttpClient) {
   
    this.signupForm = this.fb.group({
      id:"",
      platforms: [[]],
      technologies:[[]],
      integrations: [[]],
      discription: "",
      stakeholders: [[]],
      contactMedium:""
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const signupRequest = {
        customerId:localStorage.getItem("anorgcustomerid"),
        platforms: this.signupForm.value.platforms,
        technologies: this.signupForm.value.technologies,
        integrations: this.signupForm.value.integrations,
        discription: this.signupForm.value.discription,
        stakeholders: this.signupForm.value.stakeholders,
        contactMedium:this.signupForm.value.contactMedium
      };

      console.log(signupRequest)
      this.http.post('https://localhost:7159/customer/projectdeal', signupRequest)
        .subscribe(response => {
          //localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
          //this.router.navigate(['/homec']);
          location.href="/#/deals"
        }, error => {
          console.log(error)
        });
    }
  }
}
