import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/Models/pagination';
import { IProduct } from './shared/Models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shankara';
  products: IProduct[];

  constructor() { }

  ngOnInit(): void {
    
  }
}
