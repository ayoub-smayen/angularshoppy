import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './chart/chart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { ChartproductComponent } from './chartproduct/chartproduct.component';


@NgModule({
  declarations: [IndexComponent, ChartComponent, AddproductComponent, EditprofileComponent, AddcategoriesComponent, AdminorderComponent, ChartproductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
