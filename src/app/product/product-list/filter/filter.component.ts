import { Component, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outOfStock:number=0;

  
  @Output()
  selectedRadioButtonChange:EventEmitter<string> =new EventEmitter<string>();
  selectFilterRadioButton:string='all';
onSelectedFilterRedioButton(){
  
  this.selectedRadioButtonChange.emit(this.selectFilterRadioButton);
}


}
