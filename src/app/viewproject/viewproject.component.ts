import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewproject.component.html',
  styleUrl: './viewproject.component.scss'
})
export class ViewprojectComponent implements OnInit{

  deal: any;

  ngOnInit(): void {
    const data = localStorage.getItem("customerviewproject");
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
