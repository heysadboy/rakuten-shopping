import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  data = [
    {
      id: 1,
      name: "Item 1",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 1000,
      info: "Product Info"
    },
    {
      id: 2,
      name: "Item 2",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 5000,
      info: "Product Info"
    },
    {
      id: 3,
      name: "Item 3",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 200,
      info: "Product Info"
    },
    {
      id: 4,
      name: "Item 4",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 100000,
      info: "Product Info"
    },
    {
      id: 5,
      name: "Item 5",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 7800,
      info: "Product Info"
    },
    {
      id: 6,
      name: "Item 6",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 4500,
      info: "Product Info"
    },
    {
      id: 7,
      name: "Item 7",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 3000,
      info: "Product Info"
    },
    {
      id: 8,
      name: "Item 8",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      price: 60000,
      info: "Product Info"
    }
  ]

  sort_type = "";
  public sortFilter: any="";

  setAsc() {
    this.sort_type = "asc";
  }

  setDesc() {
    this.sort_type = "desc";
  }
}
