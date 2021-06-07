import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartproductComponent } from './chartproduct.component';

describe('ChartproductComponent', () => {
  let component: ChartproductComponent;
  let fixture: ComponentFixture<ChartproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
