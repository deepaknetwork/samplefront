// import { Component } from '@angular/core';
// import { IconDirective } from '@coreui/icons-angular';
// import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

// @Component({
//     selector: 'app-register',
//     templateUrl: './register.component.html',
//     styleUrls: ['./register.component.scss'],
//     standalone: true,
//     imports: [ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
// })
// export class RegisterComponent {

//   constructor() { }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],  // Import HttpClientModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
    if(localStorage.getItem("anorgcustomerid")!=null){
      this.router.navigate(['']);
    }
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const signupRequest = {
        id:this.signupForm.value.email,
        name: this.signupForm.value.name,
        phone: this.signupForm.value.phone,
        password: this.signupForm.value.password
      };

      this.http.post('https://localhost:7159/customer/signup', signupRequest)
        .subscribe(response => {
          localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
          this.router.navigate(['/homec']);
        }, error => {
          alert(error.error.message)
        });
    }
  }
}
