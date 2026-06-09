import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(
        (m) => m.HomePageModule
      )
  },
  {
    path: "collection",
    loadChildren: () =>
      import("./pages/my-collection-page/my-collection-page.module").then(
        (m) => m.MyCollectionPageModule
      )
  },
  {
    path: "actus",
    loadChildren: () =>
      import("./pages/actus-page/actus-page.module").then(
        (m) => m.ActusPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
