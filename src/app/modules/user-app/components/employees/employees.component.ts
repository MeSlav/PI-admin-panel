import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, take } from 'rxjs';
import { Employee } from 'src/app/types/types';
import { EmployeesService } from '../../services/employees.service';

@UntilDestroy()
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  employees: MatTableDataSource<Employee> = new MatTableDataSource();
  selectedEmployee?: Employee;
  selection = new SelectionModel<any>(false, []);
  displayedColumns: string[] = ['id', 'name', 'email', 'phone_number', 'availability'];

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.employeesService.getEmployees()
      .pipe(
        untilDestroyed(this),
        switchMap(res => this.employees.data = res as Employee[]),
      )
      .pipe(
        untilDestroyed(this),
        take(1),
        switchMap(() => this.route.queryParams.pipe(untilDestroyed(this))),
      )
      .pipe(
        switchMap((queryParams: any) => {
          if(!queryParams.employee) return Promise.resolve();
          return this.employeesService.getEmployeeById(queryParams.employee)
        })
      )
      .subscribe((selectedEmployee: any) => {
        this.selectedEmployee = selectedEmployee;
        this.selection.toggle(this.employees.data.find(emp => emp.id === selectedEmployee?.id));
      });
  }

  ngAfterViewInit(): void {
    this.employees.sort = this.sort;
    this.employees.paginator = this.paginator;
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();

    if (this.employees.paginator) {
      this.employees.paginator.firstPage();
    }
  }

  onRowSelect(row: any) {
    this.router.navigate([], {
      queryParams: { employee: row.id },
      relativeTo: this.route,
    });
  }

}
