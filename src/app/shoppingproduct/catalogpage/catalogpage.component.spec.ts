import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogpageComponent } from './catalogpage.component';

describe('CatalogpageComponent', () => {
  let component: CatalogpageComponent;
  let fixture: ComponentFixture<CatalogpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
