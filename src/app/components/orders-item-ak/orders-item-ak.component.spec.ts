import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemAKComponent } from './orders-item-ak.component';

describe('OrdersItemAKComponent', () => {
  let component: OrdersItemAKComponent;
  let fixture: ComponentFixture<OrdersItemAKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemAKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
