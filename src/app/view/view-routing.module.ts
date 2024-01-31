import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewComponent} from "./view.component";
import {DashboardModule} from "./dashboard/dashboard.module";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      // {
      //   path: 'blank-page',
      //   loadChildren: () =>
      //     import('./blank-page/blank-page.module').then(
      //       (m) => m.BlankPageModule
      //     ),
      // },
      // {
      //   path: 'product',
      //   loadChildren: () =>
      //     import('./product/product.module').then((m) => m.ProductModule),
      // },
      // {
      //   path: 'sales',
      //   loadChildren: () =>
      //     import('./sales/sales.module').then((m) => m.SalesModule),
      // },
      // {
      //   path: 'purchase',
      //   loadChildren: () =>
      //     import('./purchase/purchase.module').then((m) => m.PurchaseModule),
      // },
      // {
      //   path: 'expense',
      //   loadChildren: () =>
      //     import('./expense/expense.module').then((m) => m.ExpenseModule),
      // },
      // {
      //   path: 'quotation',
      //   loadChildren: () =>
      //     import('./quotation/quotation.module').then((m) => m.QuotationModule),
      // },
      // {
      //   path: 'transfer',
      //   loadChildren: () =>
      //     import('./transfer/transfer.module').then((m) => m.TransferModule),
      // },
      // {
      //   path: 'return',
      //   loadChildren: () =>
      //     import('./return/return.module').then((m) => m.ReturnModule),
      // },
      // {
      //   path: 'people',
      //   loadChildren: () =>
      //     import('./people/people.module').then((m) => m.PeopleModule),
      // },
      // {
      //   path: 'places',
      //   loadChildren: () =>
      //     import('./places/places.module').then((m) => m.PlacesModule),
      // },
      //
      // {
      //   path: 'element',
      //   loadChildren: () =>
      //     import('./element/element.module').then((m) => m.ElementModule),
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./charts/charts.module').then((m) => m.ChartsModule),
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./icons/icons.module').then((m) => m.IconsModule),
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./forms/forms.module').then((m) => m.FormsModule),
      // },
      // {
      //   path: 'table',
      //   loadChildren: () =>
      //     import('./table/table.module').then((m) => m.TableModule),
      // },
      //
      // {
      //   path: 'report',
      //   loadChildren: () =>
      //     import('./report/report.module').then((m) => m.ReportModule),
      // },
      // {
      //   path: 'users',
      //   loadChildren: () =>
      //     import('./users/users.module').then((m) => m.UsersModule),
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () =>
      //     import('./settings/settings.module').then((m) => m.SettingsModule),
      // },
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('./profile/profile.module').then((m) => m.ProfileModule),
      // },
      // {
      //   path: 'activities',
      //   loadChildren: () =>
      //     import('./activities/activities.module').then(
      //       (m) => m.ActivitiesModule
      //     ),
      // },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
