import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilePageModule'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:  [RouterModule]
})
export class UsersRoutingModule { }
