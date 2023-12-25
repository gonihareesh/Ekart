import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductComponent } from './product/product.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { SearchComponent } from './product/search/search.component';
import {FormsModule } from '@angular/forms';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ChildProductComponent } from './product/product-list/child product/child-product.component';
import { FilterComponent } from './product/product-list/filter/filter.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ProductComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchComponent,
    ProductListComponent,
    ChildProductComponent,
    FilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
