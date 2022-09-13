import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/types/types';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalInfo!: Employee;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService
      .getPersonalInfo()
      .subscribe((res: any) => {
        this.personalInfo = res;
      });
  }

}
