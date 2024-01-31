import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers.component";
import {ProductsComponent} from "../products/products.component";

const routes: Routes = [
  { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'customer-list',
        loadChildren: () =>
          import('./customerlist/customerlist.module').then(
            (m) => m.CustomerlistModule
          ),
      },
      {
        path: 'add-customer',
        loadChildren: () =>
          import('./addcustomer/addcustomer.module').then(
            (m) => m.AddcustomerModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
