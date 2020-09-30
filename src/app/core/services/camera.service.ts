import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { CameraModel } from '../models/responses/camera.model';
import { ResolutionStatisticModel } from '../models/responses/resolution-statistic.model';
import { CameraListModel } from '../models/responses/camera-list.model';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
   URL:string;
  constructor(private httpService:HttpClient) { 
    this.URL=environment.baseURL+'cameras';
  }

  getCamras():Observable<CameraModel[]>{
    return this.httpService.get<CameraModel[]>(this.URL);
  }

  getCameras(page:number,search?:string):Observable<CameraListModel>{
    if (search)
    return this.httpService.get<CameraListModel>(`${this.URL}/search?search=${search}&page=${page-1}&size=2`);
    else{
      return this.httpService.get<CameraListModel>(`${this.URL}/search?page=${page-1}&size=2`);
    }
  }
  updateCamera(req:CameraModel):Observable<CameraModel>{
    return this.httpService.put<CameraModel>(this.URL, req)
    
  }

  deleteCamera(id:string):Observable<void>{
    return this.httpService.delete<void>(`${this.URL}?id=${id}`);
  }

  addCamera(req: CameraModel) :Observable<CameraModel>{
    return this.httpService.post<CameraModel>(this.URL,req);
      
  }
  getCamera(id:string):Observable<CameraModel>{
    return this.httpService.get<CameraModel>(`${this.URL}/${id}`);
  }
  getDataChart():Observable<ResolutionStatisticModel[]>{
    return this.httpService.get<ResolutionStatisticModel[]>(`${this.URL}/resolutionStatistic`);
  }
}
