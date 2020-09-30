import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'camera', pathMatch: 'full' },
  {
    path: 'camera',
    loadChildren: () => import('./modules/camera/camera.module').then(module => module.CameraModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
