import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service-modal',
  templateUrl: './add-service-modal.component.html',
  styleUrls: ['./add-service-modal.component.scss']
})
export class AddServiceModalComponent implements OnInit {
  serviceFrom!: FormGroup;
  selectedService: any = {
    price: '',
    category: {
      name: '',
    },
    description: '',
  }

  constructor() { }

  ngOnInit(): void {
    this.serviceFrom = new FormGroup({
      price: new FormControl('', [Validators.required]),
      category : new FormControl(''),
      description: new FormControl(''),
    });
  }
}
