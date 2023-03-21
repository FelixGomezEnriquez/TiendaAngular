import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CestaComponent } from './cesta/cesta.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { CarouselModule } from 'primeng/carousel';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CestaComponent,
    HomeComponent,
    InicioComponent,
    ProductosComponent,
    DetailProductComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    RouterModule,
    TabMenuModule,
    CarouselModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    PanelModule,
    RatingModule,
    FormsModule,
    OrderListModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
