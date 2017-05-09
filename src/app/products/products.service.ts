import { Injectable } from '@angular/core';

import { Product } from './products.class';

const PRODUCTS: Product[] = [
    { id: 11, name: 'Pain' },
    { id: 12, name: 'Baguette' },
    { id: 13, name: 'Croissant' },
    { id: 14, name: 'Pain Raisin' },
    { id: 15, name: 'Pain Chocolat' }
];

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}
