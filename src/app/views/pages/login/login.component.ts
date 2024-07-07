// import { Component } from '@angular/core';
// import { NgStyle } from '@angular/common';
// import { IconDirective } from '@coreui/icons-angular';
// import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.scss'],
//     standalone: true,
//     imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]
// })
// export class LoginComponent {

//   constructor() { }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],  // Import HttpClientModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
    if(localStorage.getItem("anorgcustomerid")!=null){
      this.router.navigate(['']);
    }
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const signupRequest = {
        id:this.signupForm.value.email,
        password: this.signupForm.value.password
      };

      this.http.post('https://localhost:7159/customer/login', signupRequest)
        .subscribe(response => {
          console.log(response)
          localStorage.setItem("anorgcustomerid",this.signupForm.value.email)
          this.router.navigate(['']);
        }, error => {
          alert(error.error)
        });
    }
  }
}
