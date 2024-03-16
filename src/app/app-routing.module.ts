import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardsComponent } from './admin/components/dashboards/dashboards.component';
import { HomeComponent } from './ui/componenets/home/home.component';

const routes: Routes = [
  {path:"admin",component:LayoutComponent,children:[
    {path:"",component:DashboardsComponent},
    {path:"customers",loadChildren:()=>import("./admin/components/customer/customer.module").then(module=>module.CustomerModule)},
    {path:"products",loadChildren:()=>import("./admin/components/products/products.module").then(module=>module.ProductsModule)},
    {path:"orders",loadChildren:()=>import("./admin/components/orders/orders.module").then(module=>module.OrdersModule)}
  ]},
  {path:"",component:HomeComponent},
  {path:"basket",loadChildren:()=>import("./ui/componenets/basket/basket.module").then(module=>module.BasketModule)},
  {path:"product",loadChildren:()=>import("./ui/componenets/products/products.module").then(module=>module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
