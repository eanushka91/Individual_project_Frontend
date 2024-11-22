import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFineIssuenceComponent } from './user-fine-issuence.component';

describe('UserFineIssuenceComponent', () => {
  let component: UserFineIssuenceComponent;
  let fixture: ComponentFixture<UserFineIssuenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFineIssuenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFineIssuenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
