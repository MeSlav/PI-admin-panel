import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/types/types';
import { CompaniesService } from '../../services/companies.service';
import { EmployeesService } from '../../services/employees.service';
import { CompanyModalComponent } from '../company-modal/company-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalInfo!: Employee;
  companies: MatTableDataSource<any> = new MatTableDataSource<any>();

  displayedColumns: string[] = ['id', 'name', 'web'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeesService: EmployeesService,
    private companiesService: CompaniesService,
    private dialog: MatDialog
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
        this.companies.data = res;
      })
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.companies.filter = filterValue.trim().toLowerCase();

    if (this.companies.paginator) {
      this.companies.paginator.firstPage();
    }
  }

  onRowSelect(row: any) {
    this.dialog.open(CompanyModalComponent, {
      width: '400px',
      data: {
        isEdit: true,
        companyData: row,
      }
    });
  }

  onAddCompany() {
    this.dialog.open(CompanyModalComponent, {
      width: '400px',
      data: {}
    });
  }

}
