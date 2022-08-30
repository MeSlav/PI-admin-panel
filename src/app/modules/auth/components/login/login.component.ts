import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = 'test';
  password: string = 'test';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login({
      email: this.email,
      password: this.password,
    });
    // this.router.navigate(['/app']);
  }
}
