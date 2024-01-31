import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductsListModule} from "./products-list/products-list.module";

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () =>
          import('./products-list/products-list.module').then(
            (m) => m.ProductsListModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./addproduct/addproduct.module').then(
            (m) => m.AddproductModule
          ),
      },

    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
