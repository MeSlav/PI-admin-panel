import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/types/types';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone_number', 'availability'];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees()
      .subscribe(res => {
        console.log('RESPOSNE', res);
        this.employees = res as Employee[];
      });
  }

}
