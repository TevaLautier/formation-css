import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-collection-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './my-collection-page.component.html',
  styleUrls: ['./my-collection-page.component.scss']
})
export class MyCollectionPageComponent implements OnInit {
  menus = [
    { label: "Liste", route: "list" },
    { label: "Planning", route: "planning" },
    { label: "Manquant", route: "manquant" },
    { label: "Livre lu", route: "lu" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
