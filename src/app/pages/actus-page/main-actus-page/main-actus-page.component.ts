import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { ActusService } from "../../../_services/actus.service";
import { ActusItem } from "../../../_classes/actus-item";
import { NoImagePipe } from "../../../modules/utils/no-image.pipe";

@Component({
  selector: "app-main-actus-page",
  standalone: true,
  imports: [NoImagePipe, DatePipe],
  templateUrl: "./main-actus-page.component.html",
  styleUrls: ["./main-actus-page.component.scss"]
})
export class MainActusPageComponent implements OnInit {
  actus: ActusItem[];
  constructor(private readonly actuSvc: ActusService) {}

  ngOnInit() {
    this.actuSvc.getActus().subscribe(actus => {
      this.actus = actus;
    });
  }
}
