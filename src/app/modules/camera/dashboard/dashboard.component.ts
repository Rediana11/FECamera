import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { ResolutionStatisticModel } from 'src/app/core/models/responses/resolution-statistic.model';
import { CameraService } from 'src/app/core/services/camera.service';
import { getRandomColor } from 'src/app/share/random-colors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
datas:any;
labels:any[];
data:any[];
colors:string[];
cameras:ResolutionStatisticModel[];
  constructor(private cameraService:CameraService) { }
  ngOnInit(): void {
    this.colors=[];
    this.cameraService.getDataChart().subscribe(c=>{this.cameras=c;
      this.labels = [
        ...this.cameras.map((item: ResolutionStatisticModel) =>
            item.resolution
          )
      ];
      this.data = [
        ...this.cameras.map((item: ResolutionStatisticModel) =>         
            item.count 
        )
      ];
      this.cameras.forEach(el=>this.colors.push(  getRandomColor()));
      this.datas = {
        labels: this.labels,
        datasets: [
            {
                data: this.data,
                backgroundColor: this.colors,
                hoverBackgroundColor: this.colors
            }]    
        };
  
    });


  }

}
