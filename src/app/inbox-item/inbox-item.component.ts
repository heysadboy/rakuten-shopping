import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-item',
  templateUrl: './inbox-item.component.html',
  styleUrls: ['./inbox-item.component.css']
})
export class InboxItemComponent {

  @Input() email:any;

  setSelected() {
    this.email.selected = !this.email.selected;
  }

  setFlag() {
    this.email.flaged = !this.email.flaged;
  }

  deleteItem() {
    this.email.deleted = !this.email.deleted;
  }
}
