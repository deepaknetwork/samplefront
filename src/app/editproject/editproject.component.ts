import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormModule, ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-editproject',
  standalone: true,
  imports: [CommonModule,ModalModule,HttpClientModule,FormModule,ReactiveFormsModule],
  templateUrl: './editproject.component.html',
  styleUrl: './editproject.component.scss'
})
export class EditprojectComponent implements OnInit{

  deal: any;
  projectForm: FormGroup;
 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.projectForm = this.fb.group({
      id: [''],
      state: [''],
      customerId: [''],
      discription: [''],
      contactMedium: [''],
      platforms: [''],
      technologies: [''],
      integrations: [''],
      stakeholders: [''],
      budget: ['']
    });
   }

  ngOnInit(): void {
    const data = localStorage.getItem("customerviewproject");
    if (data) {
        this.deal = JSON.parse(data);
        console.log(this.deal);
    } 
    const deal = {
      id: this.deal.id,
      state: this.deal.state,

      discription: this.deal.discription,
      customerId: this.deal.customerId,
      contactMedium: this.deal.contactMedium,
      platforms: this.deal.platforms,
      technologies: this.deal.technologies,
      integrations: this.deal.integrations,
      stakeholders: this.deal.stakeholders,
      budget: this.deal.budget
    };

    this.projectForm.patchValue(deal);

  }
  edit(): void {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      console.log(formData)
      this.http.put(`https://localhost:7159/admin/projects`, formData).subscribe(response => {
        alert('Project updated successfully');
      }, error => {
        console.error('Error updating project', error);
      });
    }
  }
  }


