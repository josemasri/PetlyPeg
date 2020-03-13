import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';



@NgModule({
  declarations: [
    ImagenesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenesPipe
  ]
})
export class PipesModule { }
