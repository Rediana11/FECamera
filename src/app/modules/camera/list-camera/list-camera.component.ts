
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { CameraModel } from 'src/app/core/models/responses/camera.model';
import { CameraService } from 'src/app/core/services/camera.service';

import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-list-camera',
  templateUrl: './list-camera.component.html',
  styleUrls: ['./list-camera.component.scss']
})
export class ListCameraComponent implements OnInit {
  cameras:CameraModel[];
  hasRecords:boolean;
   totalEntities:number;
   currentPage: number;
   perPage :number;
   totalPages:number;
   search: string;

  constructor(private cameraService:CameraService,private router:Router,    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.listCamera(0);
    this.perPage=2;
    this.currentPage=1;
  }
  onEdit(camera:CameraModel){
    this.router.navigate([`/camera/list/add`], { queryParams:{id:camera.id},skipLocationChange:true});
  }
  onAdd(){
    this.router.navigate([`/camera/list/add`]);
  }
  onDelete(camera:CameraModel){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this camera?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cameraService.deleteCamera(camera.id).subscribe(res=>this.listCamera(0));

      }
     
  });
  }
  onSearch(){
    this.listCamera(this.currentPage)
  }
  listCamera(page:number){
    this.cameraService.getCameras(page,this.search).subscribe(c=>{this.cameras=c.cameras;if(c.cameras.length>0)this.hasRecords=true;else this.hasRecords=false;this.totalEntities=c.totalElements});
  }
  
goNext(){
  this.currentPage++;
  this.listCamera(this.currentPage);  
}

goPrev(){
  this.currentPage--;
  this.listCamera(this.currentPage);
}

goPage(page:number){
  this.currentPage=page;
  this.listCamera(this.currentPage);  
}

getMin(): number {
  return ((this.perPage * this.currentPage) - this.perPage) + 1;
}

getMax(): number {
  let max = this.perPage * this.currentPage;
  if (max > this.totalEntities) {
    max = this.totalEntities;
  }
  return max;
}

lastPage(): boolean {
  return this.perPage * this.currentPage > this.totalEntities-1;
}

listPages():number[]{
  const pages: number[] = [];
  for(let value=1; value<=this.totalPages;value++)
  {
    pages.push(value);
  }
  return pages;
}
}
