import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products!: Product[];

  constructor(private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
