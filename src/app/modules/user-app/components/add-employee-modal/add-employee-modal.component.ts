import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/types/types';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {
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

}
