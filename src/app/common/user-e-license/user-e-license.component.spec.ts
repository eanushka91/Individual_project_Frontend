import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserELicenseComponent } from './user-e-license.component';

describe('UserELicenseComponent', () => {
  let component: UserELicenseComponent;
  let fixture: ComponentFixture<UserELicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserELicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserELicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
