import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ListOrdersComponent } from '../list-orders/list-orders.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  {path: 'myorders', component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: ListOrdersComponent, canActivate: [AuthGuard, RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
