import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBaseComponent } from './cart-base.component';

describe('CartBaseComponent', () => {
  let component: CartBaseComponent;
  let fixture: ComponentFixture<CartBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
