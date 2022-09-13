import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/types/types';
import { CompaniesService } from '../../services/companies.service';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalInfo!: Employee;
  companies: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'web'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeesService: EmployeesService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.employeesService
      .getPersonalInfo()
      .subscribe((res: any) => {
        this.personalInfo = res;
      });
    
    this.companiesService
      .getCompanies()
      .subscribe((res: any) => {
        this.companies = res;
      })
  }

  applyFilter(e: Event) {

  }

}
