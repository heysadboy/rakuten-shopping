import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'inbox', component: InboxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
