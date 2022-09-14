import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectsService } from '../../services/projects.service';
import { ApplicationsModalComponent } from '../applications-modal/applications-modal.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'job_description', 'job_price', 'our_offer', 'other_offers', 'won_by_us'];

  applicationsList: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.projectsService.getApplications()
      .subscribe((res: any) => {
        this.applicationsList.data = res.results;
      });
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.applicationsList.filter = filterValue.trim().toLowerCase();

    if (this.applicationsList.paginator) {
      this.applicationsList.paginator.firstPage();
    }
  }

  onRowSelect(row: any) {
    this.dialog.open(ApplicationsModalComponent, {
      width: '450px',
      data: {
        isEdit: true,
        applicationData: row,
      }
    });
  }

  onAddApplication() {
    this.dialog.open(ApplicationsModalComponent, {
      width: '450px',
      data: {},
    });
  }

}
