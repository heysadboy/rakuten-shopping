import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})



export class ShoppingItemComponent {
  @Input()
  item: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'].currentValue) {
      this.item = changes['item'].currentValue;
    }
  }

}
