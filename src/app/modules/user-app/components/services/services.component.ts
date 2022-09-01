import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/types/types';
import { EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  equipment: MatTableDataSource<Employee> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'market_value', 'price_per_hour', 'category'];

  constructor(private employeesService: EquipmentService) { }

  ngOnInit(): void {
    this.employeesService.getEquipment()
      .subscribe((res) => {
        this.equipment.data = (res as any).results as Employee[];
      });
  }

  ngAfterViewInit(): void {
    this.equipment.sort = this.sort;
    this.equipment.paginator = this.paginator;
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.equipment.filter = filterValue.trim().toLowerCase();

    if (this.equipment.paginator) {
      this.equipment.paginator.firstPage();
    }
  }

}
