import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ModelFunction, ModelOptions, ModelSignal, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, ColComponent, ModalModule, ModalToggleDirective, RowComponent, TableDirective } from '@coreui/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { window } from 'rxjs';

@Component({
  selector: 'app-meets',
  standalone: true,
  imports: [ModalModule,HttpClientModule,CommonModule,TableDirective,CardComponent,CardBodyComponent,CardFooterComponent,CardHeaderComponent,ColComponent,RowComponent],
  templateUrl: './meets.component.html',
  styleUrl: './meets.component.scss'
})
export class MeetsComponent implements OnInit {
  @ViewChild('verticallyCenteredModal', { static: true }) verticallyCenteredModal!: TemplateRef<any>;
  deals: any[] = [];
  selecteddeal:any

  
  constructor( private http: HttpClient,private modalService: NgbModal,private router: Router) {}
  ngOnInit(): void {
    //const userDetail = { id:localStorage.getItem("anorgcustomerid") };

    this.http.get<any[]>('https://localhost:7159/admin/meets')
      .subscribe(
        response => {
          this.deals=response
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  openModal(deal: any) {
    this.selecteddeal=deal
    this.modalService.open(this.verticallyCenteredModal, { centered: true });
  }
  stat(i:any){
    console.log(i)
    this.http.post(`https://localhost:7159/admin/meetstatus`, {id:this.selecteddeal.id,status:i}).subscribe(response => {
        this.modalService.dismissAll(this.verticallyCenteredModal);
        this.router.navigate([this.router.url]);
      }, error => {
        console.error('Error updating project', error);
      });
  }
}
