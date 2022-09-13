import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'description', 'location', 'men_needed', 'price'];

  jobsList: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getJobs()
      .subscribe((res: any) => {
        this.jobsList.data = res.results;
      });
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.jobsList.filter = filterValue.trim().toLowerCase();

    if (this.jobsList.paginator) {
      this.jobsList.paginator.firstPage();
    }
  }

}
