import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraService } from './services/camera.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[CameraService]
})
export class CoreModule { }
