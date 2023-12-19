import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserformComponent } from './components/userform/userform.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserformComponent
      },
      {
        path: ':id',
        component: UserformComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
