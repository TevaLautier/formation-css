import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActusPageRoutingModule } from "./actus-page-routing.module";
import { MainActusPageComponent } from "./main-actus-page/main-actus-page.component";
import { UtilsModule } from "../../modules/utils/utils.module";

@NgModule({
  imports: [CommonModule, ActusPageRoutingModule, UtilsModule, MainActusPageComponent]
})
export class ActusPageModule {}
