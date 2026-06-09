import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyCollectionPageRoutingModule } from "./my-collection-page-routing.module";
import { RouterModule } from "@angular/router";
import { MyCollectionPageLuComponent } from "./my-collection-page-lu/my-collection-page-lu.component";
import { MyCollectionPageListComponent } from "./my-collection-page-list/my-collection-page-list.component";
import { MyCollectionPageComponent } from "./my-collection-page.component";
import { MyCollectionPagePlanningComponent } from "./my-collection-page-planning/my-collection-page-planning.component";
import { MyCollectionPageManquantComponent } from "./my-collection-page-manquant/my-collection-page-manquant.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MyCollectionPageRoutingModule,
    MyCollectionPageComponent,
    MyCollectionPagePlanningComponent,
    MyCollectionPageManquantComponent,
    MyCollectionPageLuComponent,
    MyCollectionPageListComponent,
  ],
  exports: [
    MyCollectionPagePlanningComponent,
    MyCollectionPageManquantComponent,
    MyCollectionPageLuComponent,
    MyCollectionPageListComponent,
  ],
})
export class MyCollectionPageModule {}
