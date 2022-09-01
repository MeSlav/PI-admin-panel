import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getEquipment() {
    return this.http.get(`${ENVIRONMETS.production}/equipment/equipment/`)
      .pipe(take(1));
  }

  getEquipmentById(equipmentId: number) {
    return this.http.get(`${ENVIRONMETS.production}/equipment/equipment/${equipmentId}`)
      .pipe(take(1));
  }

  updateEquipment(equipmentId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/equipment/equipment/${equipmentId}`, payload)
      .pipe(take(1));
  }
}
