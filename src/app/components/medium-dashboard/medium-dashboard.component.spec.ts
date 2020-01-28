import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumDashboardComponent } from './medium-dashboard.component';

describe('MediumDashboardComponent', () => {
  let component: MediumDashboardComponent;
  let fixture: ComponentFixture<MediumDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
