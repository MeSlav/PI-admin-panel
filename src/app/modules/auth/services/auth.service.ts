import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

type UserDetails = {
  email: string,
  password: string,
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = ENVIRONMETS.production;

  constructor(private http: HttpClient) { }

  login(userDetails: UserDetails) {
    const subj = new Subject();

    this.http.post(`${this.apiUrl}/auth/login/`, userDetails)
      .pipe(take(1))
      .subscribe((res) => {
        console.log("RESPONSE", res);
        subj.next(res);
      });

    return subj.asObservable();
  }

  logout() {
    return this.http.post(`${this.apiUrl}/auth/logout/`, {}, {
      headers: {

      }
    });
  }
}
