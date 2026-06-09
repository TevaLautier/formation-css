import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainActusPageComponent } from "./main-actus-page/main-actus-page.component";

const routes: Routes = [{ path: "", component: MainActusPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActusPageRoutingModule {}
