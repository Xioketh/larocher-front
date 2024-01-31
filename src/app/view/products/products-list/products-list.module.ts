import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {sharedModule} from "../../../shared/shared.module";
import {ProductsListRoutingModule} from "./products-list-routing.module";
import {ProductsListComponent} from "./products-list.component";



@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsListRoutingModule, sharedModule],
})
export class ProductsListModule { }
