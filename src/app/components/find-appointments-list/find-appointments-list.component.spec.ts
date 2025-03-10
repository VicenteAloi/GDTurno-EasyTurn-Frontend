import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAppointmentsListComponent } from './find-appointments-list.component';

describe('FindAppointmentsListComponent', () => {
  let component: FindAppointmentsListComponent;
  let fixture: ComponentFixture<FindAppointmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAppointmentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
