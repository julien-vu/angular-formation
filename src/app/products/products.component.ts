import { Component } from '@angular/core';

import { Product } from './products.class'

const PRODUCTS: Product[] = [
    { id: 11, name: 'Pain' },
    { id: 12, name: 'Baguette' },
    { id: 13, name: 'Croissant' },
    { id: 14, name: 'Pain Raisin' },
    { id: 15, name: 'Pain Chocolat' }
];

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    title = 'My Product List';
    products = PRODUCTS;
    selectedProduct: Product;

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

}

