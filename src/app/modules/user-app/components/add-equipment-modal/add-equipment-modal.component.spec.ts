import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentModalComponent } from './add-equipment-modal.component';

describe('AddEquipmentModalComponent', () => {
  let component: AddEquipmentModalComponent;
  let fixture: ComponentFixture<AddEquipmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
