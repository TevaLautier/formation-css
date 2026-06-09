import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderRoutingModule } from "./header-routing.module";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

@NgModule({
  exports: [HeaderComponent],
  imports: [CommonModule, HeaderRoutingModule, MatIconModule, FormsModule, HeaderComponent]
})
export class HeaderModule {}
