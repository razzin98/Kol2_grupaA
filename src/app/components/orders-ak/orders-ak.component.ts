import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/ak-data.service";

@Component({
  selector: 'orders-ak',
  templateUrl: './orders-ak.component.html',
  styleUrls: ['./orders-ak.component.css']
})
export class OrdersAKComponent implements OnInit {

  public items$: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
