import { Component, OnInit } from '@angular/core';
import { AtomicPageTemplate } from "src/app/modules/ui/atomic-page-template/atomic-page-template";

@Component({
  selector: 'app-my-collection-page-list',
  templateUrl: './my-collection-page-list.component.html',
  styleUrls: ['./my-collection-page-list.component.scss'],
  imports: [AtomicPageTemplate]
})
export class MyCollectionPageListComponent implements OnInit {
  mangas = [
    {
      label: "One piece",
      nbCollection: 99,
      nbTotal: 101,
      termine: false,
      interrompu: false,
    },
    {
      label: "Bleach",
      nbCollection: 47,
      nbTotal: 74,
      termine: true,
      interrompu: false,
    },
    {
      label: "Berserk",
      nbCollection: 48,
      nbTotal: 48,
      termine: false,
      interrompu: false,
    },
    {
      label: "Taitei no ken",
      nbCollection: 5,
      nbTotal: 5,
      termine: false,
      interrompu: true,
    },
    {
      label: "Dr Stone",
      nbCollection: 21,
      nbTotal: 21,
      termine: false,
      interrompu: false,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
