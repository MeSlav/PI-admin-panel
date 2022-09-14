import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get(`${ENVIRONMETS.production}/accounts/companies/`)
      .pipe(take(1));
  }

  deleteCompany(companyId: number) {
    return this.http.delete(`${ENVIRONMETS.production}/accounts/companies/${companyId}`)
      .pipe(take(1));
  }

  updateCompany(companyId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/accounts/companies/${companyId}`, payload)
      .pipe(take(1));
  }

  addCompany(payload: any) {
    return this.http.post(`${ENVIRONMETS.production}/accounts/companies/`, payload)
      .pipe(take(1));
  }
}
