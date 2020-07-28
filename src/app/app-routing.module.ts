import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WashComponent } from './parent/wash/wash.component';
import { TvComponent } from './parent/tv/tv.component';
import { LaptopComponent } from './parent/laptop/laptop.component';
import { MobileComponent } from './parent/mobile/mobile.component';
import { MaterialComponent } from './material/material.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: CandidateListComponent },
  { path: 'buy-products', children:[
    { path: '', component: ParentComponent },
    { path: 'laptop', component: LaptopComponent },
    { path: 'tv', component: TvComponent },
    { path: 'mobile', component: MobileComponent },
    { path: 'wash', component: WashComponent }
  ] },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'product', component: ProductComponent },
  { path:'**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
