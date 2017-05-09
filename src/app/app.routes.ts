import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from  './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent },

    { path: 'products', loadChildren: './products/products.module#ProductsModule' },

    { path: 'about', component: AboutComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: DashboardComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

