import { Component, Input } from '@angular/core';

import { Product } from '../products.class';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    @Input() product: Product;
}