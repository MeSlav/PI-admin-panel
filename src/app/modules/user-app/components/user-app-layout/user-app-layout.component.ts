import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  kurac() {
    console.log("KURACCCCCCCCCCCCCCCcc")
  }

}
