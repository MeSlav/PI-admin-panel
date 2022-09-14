import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss']
})
export class CompanyModalComponent implements OnInit {
  companyForm!: FormGroup;
  company: any = {
    name: '',
    pdv_id: '',
    web: '',
  }
  isEdit: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data.companyData) this.company = data.companyData;
    if(data.isEdit) this.isEdit = true;
  }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      pdv_id: new FormControl(''),
      web: new FormControl(''),
    });
  }

}
