import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdeal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewdeal.component.html',
  styleUrl: './viewdeal.component.scss'
})
export class ViewdealComponent implements OnInit {
  deal: any;

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
}
