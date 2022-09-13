import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/types/types';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges {
  @Input() employee: Employee = {
    id: 0,
    name: '',
    email: '',
    address: '',
    phone_number: '',
    availability: '',
    busy_days: [],
    price_per_hour: ''
  };
  @Input() ispersonalDetails: boolean = false;
  employeeFrom!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.employeeFrom = new FormGroup({
      name : new FormControl('',[Validators.required]),
      email : new FormControl('', [Validators.required]),
      address : new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('',),
      availability : new FormControl('',),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.employeeFrom) return;
    this.employeeFrom.markAsPristine();
  }

  onNavigateBack() {
    history.back();
  }

}
