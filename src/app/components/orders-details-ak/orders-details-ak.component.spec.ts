import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsAKComponent } from './orders-details-ak.component';

describe('OrdersDetailsAKComponent', () => {
  let component: OrdersDetailsAKComponent;
  let fixture: ComponentFixture<OrdersDetailsAKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsAKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
