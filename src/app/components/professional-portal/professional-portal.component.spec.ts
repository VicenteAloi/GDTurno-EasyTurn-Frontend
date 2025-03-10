import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPortalComponent } from './professional-portal.component';

describe('ProfessionalPortalComponent', () => {
  let component: ProfessionalPortalComponent;
  let fixture: ComponentFixture<ProfessionalPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
