import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { AuthGuard } from '../auth.guard';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ListBookComponent } from '../list-book/list-book.component';
import { RoleGuard } from '../role.guard';
import { ViewBookComponent } from '../view-book/view-book.component';

const routes: Routes = [
  {path: 'addbook', component: AddBookComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: 'books', component: ListBookComponent},
  {path: 'viewbook/:id', component: ViewBookComponent},
  {path: 'editbook', component: EditBookComponent, canActivate: [AuthGuard, RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
