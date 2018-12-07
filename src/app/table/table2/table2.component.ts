import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header, Action } from '../header.model';

@Component({
  selector: 'sonal-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  public dataList: any;
  @Input() public header: Header;

  public action: Action[];

  @Input() set data(value) {
    console.log(this.header);
    this.dataList = value;

  }
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();
  get data() {
    return this.dataList;
  }
  constructor() { }
  ngOnInit() {

  }
  actionClick() {
    this.actionClicked.emit(this.action);
  }
}
