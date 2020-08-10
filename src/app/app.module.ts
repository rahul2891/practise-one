import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { MaterialComponent } from './material/material.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { LaptopComponent } from './parent/laptop/laptop.component';
import { MobileComponent } from './parent/mobile/mobile.component';
import { TvComponent } from './parent/tv/tv.component';
import { WashComponent } from './parent/wash/wash.component';
import { TestDirectiveDirective } from './appDirective/test-directive.directive';
import { FilterPipe } from './appPipes/filter.pipe';
import { TeaProductsService } from './appServices/tea-products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidateListComponent,
    ParentComponent,
    PageNotFoundComponent,
    ProductComponent,
    MaterialComponent,
    ReactiveComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashComponent,
    TestDirectiveDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeaProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
