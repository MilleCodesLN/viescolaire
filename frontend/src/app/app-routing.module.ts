import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './components/messages-list/messages-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/messages-list', pathMatch: 'full' },
  { path: 'messages-list', component: MessagesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
