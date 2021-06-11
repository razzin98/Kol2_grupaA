import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from "./services/ak-data.service";
import { OrdersAKComponent } from './components/orders-ak/orders-ak.component';
import { OrdersItemAKComponent } from './components/orders-item-ak/orders-item-ak.component';
import { OrdersDetailsAKComponent } from './components/orders-details-ak/orders-details-ak.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersAKComponent,
    OrdersItemAKComponent,
    OrdersDetailsAKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
