import { NgModule } from '@angular/core'
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ProductsModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
