import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./modules/header/header.module";
import { AppMaterialModule } from "./app-material.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AppMaterialModule,
    AppComponent
  ]
})
export class AppModule {}
