import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyCollectionPageLuComponent } from "./my-collection-page-lu/my-collection-page-lu.component";
import { MyCollectionPageListComponent } from "./my-collection-page-list/my-collection-page-list.component";
import { MyCollectionPagePlanningComponent } from "./my-collection-page-planning/my-collection-page-planning.component";
import { MyCollectionPageManquantComponent } from "./my-collection-page-manquant/my-collection-page-manquant.component";
import { MyCollectionPageComponent } from "./my-collection-page.component";

const routes: Routes = [
  {
    path: "",
    component: MyCollectionPageComponent,
    children: [
      { path: "list", component: MyCollectionPageListComponent },
      { path: "planning", component: MyCollectionPagePlanningComponent },
      { path: "manquant", component: MyCollectionPageManquantComponent },
      { path: "lu", component: MyCollectionPageLuComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCollectionPageRoutingModule {}
