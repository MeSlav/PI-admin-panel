import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${ENVIRONMETS.production}/accounts/accounts/`)
      .pipe(take(1));
  }

  getEmployeeById(employeeId: number) {
    return this.http.get(`${ENVIRONMETS.production}/accounts/accounts/${employeeId}`)
      .pipe(take(1));
  }

  updateEmployee(employeeId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/accounts/accounts/${employeeId}`, payload)
      .pipe(take(1));
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(`${ENVIRONMETS.production}/accounts/accounts/${employeeId}`)
      .pipe(take(1));
  }

  getPersonalInfo() {
    return this.http.get(`${ENVIRONMETS.production}/accounts/me`)
      .pipe(take(1));
  }
}
