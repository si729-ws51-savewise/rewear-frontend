import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {RetailerComponent} from "./rewear/retailers/pages/retailer/retailer.component";
import {ShopperComponent} from "./rewear/shoppers/pages/shopper/shopper.component";
import {ProductDetailComponent} from "./rewear/shoppers/components/product-detail/product-detail.component";
import LogInComponent from "./public/auth/log-in/log-in.component";
import SignUpComponent from './public/auth/sign-up/sign-up.component';
import {AdminPanelComponent} from "./rewear/retailers/components/admin-panel/admin-panel.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'retailers', component:RetailerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'shoppers', component: ShopperComponent},
  {path: 'shoppers/products/:id', component: ProductDetailComponent},
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path: 'retailers/administrator-panel', component:AdminPanelComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

