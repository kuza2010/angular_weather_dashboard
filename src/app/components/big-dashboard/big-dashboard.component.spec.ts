import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDashboardComponent } from './big-dashboard.component';

describe('BigDashboardComponent', () => {
  let component: BigDashboardComponent;
  let fixture: ComponentFixture<BigDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
