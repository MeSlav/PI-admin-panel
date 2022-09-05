import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, take } from 'rxjs';
import { EquipmentService } from '../../services/equipment.service';

@UntilDestroy()
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<any>(false, []);

  equipment: MatTableDataSource<any> = new MatTableDataSource();
  selectedEquipment?: any;
  displayedColumns: string[] = ['id', 'name', 'market_value', 'price_per_hour', 'category'];

  constructor(
    private equipmentService: EquipmentService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.equipmentService.getEquipment()
      .pipe(
        take(1),
        untilDestroyed(this),
        switchMap(res => this.equipment.data = (res as any).results as any[])
      )
      .pipe(
        switchMap(() => this.route.queryParams.pipe(untilDestroyed(this))),
      )
      .subscribe((queryParams: any) => {
        this.selectedEquipment = this.equipment.data.find(emp => emp.id === +queryParams.equipment);
        this.selection.toggle(this.selectedEquipment);
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

  onRowSelect(row: any) {
    this.router.navigate([], {
      queryParams: { equipment: row.id },
      relativeTo: this.route,
    });
  }

}
