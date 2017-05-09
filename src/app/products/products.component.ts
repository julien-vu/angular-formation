import { Component, OnInit } from '@angular/core';

import { Product } from './products.class'

import { ProductService } from './products.service';


@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    title = 'My Product List';

    products: Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService) { }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

}

