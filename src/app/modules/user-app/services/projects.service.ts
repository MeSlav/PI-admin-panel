import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  // ============= where we applied =============
  getApplications() {
    return this.http.get(`${ENVIRONMETS.production}/tenders/tender/`)
      .pipe(take(1));
  }

  getApplicationById(applicationId: number) {
    return this.http.get(`${ENVIRONMETS.production}/tenders/tender/${applicationId}`)
      .pipe(take(1));
  }

  updateApplications(applicationId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/tenders/tender/${applicationId}`, payload)
      .pipe(take(1));
  }

  // ============= the jobs we got =============
  getJobs() {
    return this.http.get(`${ENVIRONMETS.production}/jobs/job/`)
      .pipe(take(1));
  }

  getJobsById(applicationId: number) {
    return this.http.get(`${ENVIRONMETS.production}/jobs/job/${applicationId}`)
      .pipe(take(1));
  }

  updateJob(applicationId: number, payload: any) {
    return this.http.patch(`${ENVIRONMETS.production}/jobs/job/${applicationId}`, payload)
      .pipe(take(1));
  }
}
