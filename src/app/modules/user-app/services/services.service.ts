import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get(`${ENVIRONMETS.production}/services/service/`)
      .pipe(take(1));
  }

  getServiceById(equipmentId: number) {
    return this.http.get(`${ENVIRONMETS.production}/services/service/${equipmentId}`)
      .pipe(take(1));
  }

  updateService(equipmentId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/services/service/${equipmentId}`, payload)
      .pipe(take(1));
  }

}
