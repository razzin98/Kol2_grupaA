import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'orders-item-ak',
  templateUrl: './orders-item-ak.component.html',
  styleUrls: ['./orders-item-ak.component.css']
})
export class OrdersItemAKComponent implements OnInit {

  public items$: any;

  @Input() id: number =0;
  @Input() title: string ='';
  @Input() text: string ='';
  @Input() image: string ='';
  @Input() prices: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
