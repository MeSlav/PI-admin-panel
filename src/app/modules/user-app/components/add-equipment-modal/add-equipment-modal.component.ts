import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/types/types';

@Component({
  selector: 'app-add-equipment-modal',
  templateUrl: './add-equipment-modal.component.html',
  styleUrls: ['./add-equipment-modal.component.scss']
})
export class AddEquipmentModalComponent implements OnInit {
  equipment: any = {
    id: 0,
    category: {
      id: 0,
      name: ''
    },
    date_bought: '',
    days_used: [],
    lifetime: '',
    market_value: '',
    name: '',
    price: 0,
    price_per_hour: '',
    value: 0
  };

  equipmentFrom!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.equipmentFrom = new FormGroup({
      name : new FormControl('', [Validators.required]),
      category: new FormControl(''),
      date_bought: new FormControl('',[Validators.required]),
      lifetime: new FormControl('',[Validators.required]),
      market_value: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      price_per_hour: new FormControl('',[Validators.required]),
      value: new FormControl('',[Validators.required]),
    });
  }

}
