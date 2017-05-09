import { Component } from '@angular/core';

export class Product {
    id: number;
    name: string;
}

const PRODUCTS: Product[] = [
    { id: 11, name: 'Pain' },
    { id: 12, name: 'Baguette' },
    { id: 13, name: 'Croissant' },
    { id: 14, name: 'Pain Raisin' },
    { id: 15, name: 'Pain Chocolat' }
];


@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent{
    title = 'My Product List';
    products = PRODUCTS;
    selectedProduct: Product;

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}
