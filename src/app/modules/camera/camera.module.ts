import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCameraComponent } from './list-camera/list-camera.component';
import { CameraRoutingModule } from './camera-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CoreModule } from 'src/app/core/core.module';
import { AddUpdateCameraComponent } from './add-update-camera/add-update-camera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [ListCameraComponent, AddUpdateCameraComponent,DashboardComponent],
  imports: [
    CommonModule,CameraRoutingModule,LayoutModule,CoreModule,ReactiveFormsModule,ConfirmDialogModule,ChartModule,FormsModule
  ],
  exports:[ListCameraComponent, AddUpdateCameraComponent,DashboardComponent],
  providers:[ConfirmationService]

})
export class CameraModule { }
