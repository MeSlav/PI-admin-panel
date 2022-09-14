import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-jobs-modal',
  templateUrl: './jobs-modal.component.html',
  styleUrls: ['./jobs-modal.component.scss']
})
export class JobsModalComponent implements OnInit {
  jobForm!: FormGroup;
  job: any = {
    description: '',
    location: '',
    start_date: '',
    deadline: '',
    done_at: '',
    is_done: false,
    men_needed: 0,
    price: 0,
  };
  isEdit: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.jobData) this.job = data.jobData;
    if (data.isEdit) this.isEdit = true;
  }

  ngOnInit(): void {
    this.jobForm = new FormGroup({
      description : new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
      done_at: new FormControl('', [Validators.required]),
      is_done: new FormControl(false, [Validators.required]),
      men_needed: new FormControl(0, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
    });
  }

}
