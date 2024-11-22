import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELicenseComponent } from './e-license.component';

describe('ELicenseComponent', () => {
  let component: ELicenseComponent;
  let fixture: ComponentFixture<ELicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ELicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
