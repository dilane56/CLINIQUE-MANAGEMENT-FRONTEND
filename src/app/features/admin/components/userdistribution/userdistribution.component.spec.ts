import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdistributionComponent } from './userdistribution.component';

describe('UserdistributionComponent', () => {
  let component: UserdistributionComponent;
  let fixture: ComponentFixture<UserdistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
