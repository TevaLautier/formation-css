import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("searchInput") inputSearch?: ElementRef;

  searchActive = false;

  search = "";
  constructor() {}

  ngOnInit() {}

  flipSearch() {
    this.searchActive = !this.searchActive;
    if (this.searchActive) {
      this.inputSearch?.nativeElement.focus();
    }
  }
}
