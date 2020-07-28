import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    WashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
