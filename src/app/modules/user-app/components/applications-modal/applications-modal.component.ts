import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-applications-modal',
  templateUrl: './applications-modal.component.html',
  styleUrls: ['./applications-modal.component.scss']
})
export class ApplicationsModalComponent implements OnInit {
  applicationForm!: FormGroup;
  applicaiton: any = {
    job_description: '',
    job_price: '',
    other_offers: '',
    our_offer: '',
    won_by_us: false,
  };
  isEdit: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.applicationData) this.applicaiton = data.applicationData;
    if (data.isEdit) this.isEdit = true;
  }

  ngOnInit(): void {
    this.applicationForm = new FormGroup({
      job_description : new FormControl('', [Validators.required]),
      job_price: new FormControl('', [Validators.required]),
      other_offers: new FormControl('', [Validators.required]),
      our_offer: new FormControl('', [Validators.required]),
      won_by_us: new FormControl('', [Validators.required]),
    });
  }

}
