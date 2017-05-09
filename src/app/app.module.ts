import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        DashboardComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true })
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
