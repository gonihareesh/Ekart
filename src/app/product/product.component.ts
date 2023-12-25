import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  listOfString:string[]=['hari','rama','krishna','sita','radha']
//   addToCart:number=0;
 
//   products={
//   name:'iPhone 13',
//   price: 655,
//   color:'moon-white',
//   discont: 7.5,
//   inStock:5,
//   pImage:'/assets/images/iphone.jpg'
// }
// getDiscountedPrice(){
//   return  this.product.price-(this.product.price*this.product.discont/100);
//  }
//  decrementCartValue(){
//   this.addToCart-=1;
// }
// increment(){
//   this.addToCart+=1;
//}
searchText:string='';
@ViewChild(ProductListComponent) productListComponent:ProductListComponent
 
setSearchText(value:string){
  this.searchText=value;

}
}
