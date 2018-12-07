import { Directive } from '@angular/core';

@Directive({
  selector: '[sonalStatus]'
})
export class StatusDirective {
  status = new Map();

  constructor() {
    this.status.set('Draft', 'grey');
    this.status.set('Sent', 'grey');
    this.status.set('Decline', 'red');
    this.status.set('Invoiced', 'green');
  }

}
