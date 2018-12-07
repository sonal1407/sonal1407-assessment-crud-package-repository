import { Component } from '@angular/core';

@Component({
  selector: 'sonal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = {
    name: ['Id', 'Customer_number', 'email'],
    key: ['id', 'customer_number', 'email']
  };
  data = [
    {
      'id': 9,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476'
    },
    {
      'id': 7,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476'
    }
  ];
}
