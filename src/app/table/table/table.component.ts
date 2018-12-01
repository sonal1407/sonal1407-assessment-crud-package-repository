import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng5-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
// Declare variable
private temp: any[];
@Input() public heading: any[];
@Input() public studentList: any[];
@Input('data') set data(value) {
  this.temp = value;
}
@Output() editClicked = new EventEmitter();
@Output() deleteClicked = new EventEmitter();
constructor() {
}
get data(): any {
  return this.temp;
}
ngOnInit() {
  console.log(this.studentList);
  console.log(this.temp);

}
// Emit an event when user click on the button.
public onEdit(data) {
  this.editClicked.emit(data);
}
// Emit an event when user click on the button
public onDelete(id) {
  this.deleteClicked.emit(id);
}
}
