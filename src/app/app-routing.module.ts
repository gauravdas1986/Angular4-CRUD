import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BookdetailComponent} from './bookdetail/bookdetail.component';
import {BooklistComponent} from './booklist/booklist.component';
 
const routes: Routes = [
  // { path: 'bookdetail', component: BookdetailComponent },
  { path: 'bookdetail/:id', component: BookdetailComponent },
 { path: 'bookdetails/:id', component: BookdetailComponent },
 { path: 'addBook', component: BookdetailComponent },
  { path: 'booklist', component: BooklistComponent },
   { path: 'booklist/:cat', component: BooklistComponent },
  { path: '', redirectTo: '/booklist', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
