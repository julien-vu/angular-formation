import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

export const routes: Routes = [
    {
        path: 'products', component: ProductsComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);