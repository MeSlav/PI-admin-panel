import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, take } from 'rxjs';
import { Employee } from 'src/app/types/types';
import { ServicesService } from '../../services/services.service';
import { AddServiceModalComponent } from '../add-service-modal/add-service-modal.component';

@UntilDestroy()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnChanges {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(false, []);
  services: MatTableDataSource<Employee> = new MatTableDataSource();
  selectedService: any;
  displayedColumns: string[] = ['id', 'description', 'price', 'category'];

  serviceFrom!: FormGroup;

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.serviceFrom = new FormGroup({
      name: new FormControl('',[Validators.required]),
      pricePerHour: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      marketValue: new FormControl('',),
      category : new FormControl('',),
    });

    this.servicesService.getServices()
      .pipe(
        take(1),
        untilDestroyed(this),
        switchMap(res => this.services.data = (res as any).results as any[])
      )
      .pipe(
        switchMap(() => this.route.queryParams.pipe(untilDestroyed(this))),
      )
      .pipe(
        switchMap((queryParams: any) => {
          if(!queryParams.service) return Promise.resolve();
          return this.servicesService.getServiceById(queryParams.service)
        })
      )
      .subscribe((service: any) => {
        this.selection.toggle(this.services.data.find(servicve => servicve.id === +service?.id));
        this.selectedService = service;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.serviceFrom) return;
    this.serviceFrom.markAsPristine();
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

  onNavigateBack() {
    history.back();
  }

  onAddService() {
    this.dialog.open(AddServiceModalComponent, {
      width: '450px',
    })
  }

}
