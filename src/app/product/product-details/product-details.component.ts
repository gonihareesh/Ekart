import { Component, Input } from '@angular/core';
import { ProductEntity } from '../../model/productEntity';
import { ProductListComponent } from '../product-list/product-list.component';
import { ChildProductComponent } from '../product-list/child product/child-product.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 


@Input()
productListComp:ProductListComponent= undefined;

product:ProductEntity;
ngOnInit(){
  this.product=this.productListComp.selectedProduct;
}
}
