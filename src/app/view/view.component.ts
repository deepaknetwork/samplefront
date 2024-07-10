import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';

interface Analatics{

    guests: any,
    clients: any,
    admins: any,
    dealsAccepted: any,
    dealsRejected: any,
    dealsCreated: any,
    projectCompleted: any,
    projectProgress: any,
    budgetEarned: any,
    budgetProgress: any,
    meetsScheduled: any,
    meetsSuccess: any,
    meetsFailed: any,
    callsScheduled: any,
    callsSuccess: any,
    callsFailed: any

}

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule,FormModule,ChartjsComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})

export class ViewComponent implements OnInit {

  data: any = {};
  c1 = {
    labels: ['Guest', 'Client', 'Admin'],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56']
      }
    ]
  };
  c2 = {
    labels: ['Call Scheduled', 'Call Success', 'Call Failed'],
    datasets: [{
      backgroundColor: ['#E46651', '#00D8FF', '#DD1B16'],
      data: [] as number[],
    }]
  };
  c3 = {
    labels: ['Meet Scheduled', 'Meet Success', 'Meet Failed'],
    datasets: [{
      backgroundColor: ['#E46651', '#00D8FF', '#DD1B16'],
      data: [] as number[],
    }]
  };

    @ViewChild(ChartjsComponent) chartComponent!: ChartjsComponent;
  constructor( private http: HttpClient, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.http.get<Analatics>('https://localhost:7159/admin/view')
    .subscribe(
      response => {
        this.data = response;
        // console.log([response.guests,response.clients,response.admins])
        this.c1.datasets[0].data=[response.guests,response.clients,response.admins]
        this.c2.datasets[0].data=[response.meetsScheduled,response.meetsSuccess,response.meetsFailed]
        this.c3.datasets[0].data=[response.callsScheduled,response.callsSuccess,response.callsSuccess]
        console.log(this.c3.datasets[0].data)

        this.refreshChart();
      },
      error => {
          console.log(error);
        }
    );
  

}
refreshChart() {
  if (this.chartComponent) {
    this.chartComponent.chart.update();
  }
  this.cdr.detectChanges();
}
}
