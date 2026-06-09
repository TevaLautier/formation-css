import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "noImage"
})
export class NoImagePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? value : "assets/images/no-image.png";
  }
}
