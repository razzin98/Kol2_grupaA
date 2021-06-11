import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersAKComponent} from "./components/orders-ak/orders-ak.component";
import {OrdersDetailsAKComponent} from "./components/orders-details-ak/orders-details-ak.component";
import {OrdersItemAKComponent} from "./components/orders-item-ak/orders-item-ak.component";

const routes: Routes = [
  {
    path: 'details',
    component: OrdersDetailsAKComponent,
  },
  {
    path: 'item',
    component: OrdersItemAKComponent,
  },
  {
    path: 'orders',
    component: OrdersAKComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
