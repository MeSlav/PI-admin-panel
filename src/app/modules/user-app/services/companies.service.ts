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
}
