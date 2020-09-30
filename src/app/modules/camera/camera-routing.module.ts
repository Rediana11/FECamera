import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from 'src/app/layout/full/full.component';
import { AddUpdateCameraComponent } from './add-update-camera/add-update-camera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCameraComponent } from './list-camera/list-camera.component';



const routes: Routes = [


      {
        path: '',
        component: FullComponent,
        children: [          
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListCameraComponent },
            {path: 'list/add', component:AddUpdateCameraComponent},
            {path: 'list/edit', component:AddUpdateCameraComponent},
            {path: 'dashboard', component:DashboardComponent}

        ]
        
      }

   

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CameraRoutingModule { }
