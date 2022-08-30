import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { ENVIRONMETS } from 'src/app/constants/environmentsEnum';

type UserDetails = {
  email: string,
  password: string,
};

type AppLocalStorage = {
  account: {
    address: string
    availability: any
    busy_days: any[]
    email: string
    id: number
    name: string
    phone_number: string
    price_per_hour: any
  },
  token: {
    access: string,
    refresh: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = ENVIRONMETS.production;
  locallyStoredData!: AppLocalStorage;

  constructor(private http: HttpClient) { }

  getToken(){
    if (!this.locallyStoredData) {
      this.locallyStoredData = JSON.parse(localStorage.getItem('app-admin-panel:auth') as string | '{ token: {} }');
    }

    return this.locallyStoredData.token;
  }

  setToken(data: AppLocalStorage) {
    localStorage.setItem('app-admin-panel:auth', JSON.stringify(data));
    this.locallyStoredData = data;
  }

  removeToken() {
    localStorage.removeItem('app-admin-panel:auth');
  }

  login(userDetails: UserDetails) {
    const subj = new Subject();

    this.http.post(`${this.apiUrl}/auth/login/`, userDetails)
      .pipe(take(1))
      .subscribe((res) => {
        subj.next(res);
        this.setToken(res as AppLocalStorage)
      });

    return subj.asObservable();
  }

  logout() {
    const subj = new Subject();

    this.http.post(`${this.apiUrl}/auth/logout/`, {})
      .pipe(take(1))
      .subscribe(() => {
        this.removeToken();
        subj.next(true);
      });

    return subj.asObservable();
  }
}
