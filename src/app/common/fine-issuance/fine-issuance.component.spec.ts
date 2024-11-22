import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineIssuanceComponent } from './fine-issuance.component';

describe('FineIssuanceComponent', () => {
  let component: FineIssuanceComponent;
  let fixture: ComponentFixture<FineIssuanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineIssuanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
