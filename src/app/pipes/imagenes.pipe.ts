import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagenesPipe implements PipeTransform {

  transform(img: string, type: string): string {
    return `${environment.urlServidor}/img/${type}/${img}`;
  }

}
