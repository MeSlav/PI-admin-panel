import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, take } from 'rxjs';
import { Employee } from 'src/app/types/types';
import { ServicesService } from '../../services/services.service';

@UntilDestroy()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<any>(false, []);

  services: MatTableDataSource<Employee> = new MatTableDataSource();
  selectedService: any;
  displayedColumns: string[] = ['id', 'description', 'price', 'category'];

  constructor(
    private employeesService: ServicesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.employeesService.getServices()
      .pipe(
        take(1),
        untilDestroyed(this),
        switchMap(res => this.services.data = (res as any).results as any[])
      )
      .pipe(
        switchMap(() => this.route.queryParams.pipe(untilDestroyed(this))),
      )
      .subscribe((queryParams: any) => {
        this.selectedService = this.services.data.find(servicve => servicve.id === +queryParams.service);
        this.selection.toggle(this.selectedService);
      });
  }

  ngAfterViewInit(): void {
    this.services.sort = this.sort;
    this.services.paginator = this.paginator;
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.services.filter = filterValue.trim().toLowerCase();

    if (this.services.paginator) {
      this.services.paginator.firstPage();
    }
  }

  onRowSelect(row: any) {
    this.router.navigate([], {
      queryParams: { service: row.id },
      relativeTo: this.route,
    });
  }

}
