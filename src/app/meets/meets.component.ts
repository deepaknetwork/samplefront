import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ModelFunction, ModelOptions, ModelSignal, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, ColComponent, ModalModule, ModalToggleDirective, RowComponent, TableDirective } from '@coreui/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  
  constructor( private http: HttpClient,private modalService: NgbModal) {}
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
    console.log(deal);
    this.modalService.open(this.verticallyCenteredModal, { centered: true });
  }
  stat(i:any){
    console.log(i)
  }
}
