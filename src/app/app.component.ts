import { Component, ViewChild } from '@angular/core';

import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('productList')
 productList: ProductlistComponent;


}
