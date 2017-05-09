import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing } from './products.routes';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
})
export class ProductsModule {
}
