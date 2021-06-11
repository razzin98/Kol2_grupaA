import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAKComponent } from './orders-ak.component';

describe('OrdersAKComponent', () => {
  let component: OrdersAKComponent;
  let fixture: ComponentFixture<OrdersAKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
