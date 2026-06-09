import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchActive: false;
  constructor() { }

  ngOnInit() {
  }

}
