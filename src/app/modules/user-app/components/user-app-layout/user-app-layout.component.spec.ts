import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppLayoutComponent } from './user-app-layout.component';

describe('UserAppLayoutComponent', () => {
  let component: UserAppLayoutComponent;
  let fixture: ComponentFixture<UserAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
