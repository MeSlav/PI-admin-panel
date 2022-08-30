import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-user-app-layout',
  templateUrl: './user-app-layout.component.html',
  styleUrls: ['./user-app-layout.component.scss']
})
export class UserAppLayoutComponent implements OnInit {
  menuItems = [
    "home",
    "employees",
    "equipment",
    "services",
    "projects",
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout()
      .subscribe(() => this.router.navigate(['/auth']));
  }
}
