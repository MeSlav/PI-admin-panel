import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = 'dragan.zovko@neuros.hr';
  password: string = 'pass';
  hide: boolean = true;

  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(4)])
      }
    )
  }

  onLogin() {
    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['/app']));
  }
}
