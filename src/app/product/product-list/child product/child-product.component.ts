import { Component, Input } from '@angular/core';
import {ProductEntity} from '../../../model/productEntity';
@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrl: './child-product.component.css'
})
export class ChildProductComponent {
  @Input()
  products:ProductEntity;
  
}
