import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoImagePipe } from "./no-image.pipe";

@NgModule({
  exports: [NoImagePipe],
  imports: [CommonModule, NoImagePipe]
})
export class UtilsModule {}
