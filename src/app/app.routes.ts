import { Routes } from '@angular/router';

import { DashboardComponent } from  './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    { path: 'home', component: DashboardComponent },

    { path: 'about', component: AboutComponent },
];

