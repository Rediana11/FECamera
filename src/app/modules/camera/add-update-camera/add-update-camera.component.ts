import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CameraModel } from 'src/app/core/models/responses/camera.model';
import { CameraService } from 'src/app/core/services/camera.service';


@Component({
  selector: 'app-add-update-camera',
  templateUrl: './add-update-camera.component.html',
  styleUrls: ['./add-update-camera.component.scss']
})
export class AddUpdateCameraComponent implements OnInit {
  addEditCameraForm:FormGroup;
  id:string;
  camera:CameraModel;
  constructor(private formBuilder:FormBuilder,private cameraService:CameraService,private route:ActivatedRoute,private router:Router) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
  }

  ngOnInit(): void {
    this.cameraService.getCamera(this.id).subscribe(c=>{this.camera=c;
      this.addEditCameraForm=this.formBuilder.group({
        nameControl:this.formBuilder.control(this.camera?this.camera.name:"",[Validators.required]),
        modelControl:this.formBuilder.control(this.camera?this.camera.model:"",[Validators.required]),
        ipControl:this.formBuilder.control(this.camera?this.camera.ip:"",[Validators.required]),
        resolutionControl:this.formBuilder.control(this.camera?this.camera.resolution:"",[Validators.required])
    })});

    this.addEditCameraForm=this.formBuilder.group({
      nameControl:this.formBuilder.control(this.camera?this.camera.name:"",[Validators.required]),
      modelControl:this.formBuilder.control(this.camera?this.camera.model:"",[Validators.required]),
      ipControl:this.formBuilder.control(this.camera?this.camera.ip:"",[Validators.required]),
      resolutionControl:this.formBuilder.control(this.camera?this.camera.resolution:"",[Validators.required])
    })
  }

  addEditUser(){  
    let req:CameraModel={name:this.addEditCameraForm.controls.nameControl.value,
    id:null,
    model:this.addEditCameraForm.controls.modelControl.value,
    resolution:this.addEditCameraForm.controls.resolutionControl.value,
    ip:this.addEditCameraForm.controls.ipControl.value,
    
    }
    if(this.camera){
      req.id=this.id;
      this.cameraService.updateCamera(req).subscribe();
    }
    else{
     this.cameraService.addCamera(req).subscribe();
    }
    this.router.navigate([`/camera/list`]);
  }
  onClose(){
    this.router.navigate([`/camera/list`]);
  }
}
