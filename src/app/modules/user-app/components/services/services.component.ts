import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/types/types';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  services: MatTableDataSource<Employee> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'description', 'price', 'category'];

  constructor(private employeesService: ServicesService) { }

  ngOnInit(): void {
    this.employeesService.getServices()
      .subscribe(res => {
        this.services.data = (res as any).results as Employee[];
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

}
