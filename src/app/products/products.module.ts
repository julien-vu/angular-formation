import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing } from './products.routes';
import { ProductsComponent } from './products.component';


@NgModule({
    declarations: [
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
